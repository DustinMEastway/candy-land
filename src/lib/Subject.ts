import { useState, useEffect } from 'react';

/** Function to handle value changes of an observable object. */
export type Observer<T> = (nextValue: T) => void;

/** Subject that can be observed by one or more @see Observer for changes in its value. */
export class Subject<T> {
	/** Initial value , then last value provided to @see next */
	get value(): T {
		return this._value;
	}

	/** Used to track each @see Observer to notify them of changes. */
	protected _observers: Observer<T>[] = [];

	constructor(
		/** Current value of this @see Subject. */
		protected _value: T
	) {
		this.next = this.next.bind(this);
	}

	/** Notify each @see Observer of the next value. */
	next(nextValue: T): void {
		this._value = nextValue;
		this._observers.forEach(h => h(nextValue));
	}

	/** Subscribe a new @see Observer to notify it of changes. */
	subscribe(observer: Observer<T>): () => void {
		this._observers.push(observer);

		return () => this.unsubscribe(observer);
	}

	/** Unsubscribe an @see Observer to stop notifing it of changes. */
	unsubscribe(observer: Observer<T>): void {
		this._observers = this._observers.filter(o => o === observer);
	}
}

/**
 * React hook used to manage the value a @see Subject.
 * @returns Tuple containing the current/last value and a value setter.
 */
export function useSubject<T>(subject: Subject<T>): [ T, (nextValue: T) => void ];
export function useSubject<T, R>(subject: Subject<T>, getter: (item: T) => R): [ R, (nextValue: R) => void ];
export function useSubject<T, R>(
	subject: Subject<T>,
	getter: (item: T) => R = x => x as any
): [ R, (nextValue: R) => void ] {
	const [ state, setState ] = useState(subject.value);

	// TODO: useReducer instead of useState followed by useEffect?
	const [ propState, setPropState ] = useState(getter(state));
	useEffect(() => {
		setPropState(getter(state));
	}, [ getter, state, setPropState ]);

	useEffect(() => {
		const observer = (nextValue: T) => setState(nextValue);
		subject.subscribe(observer);
		return () => subject.unsubscribe(observer);
	}, [ subject ]);

	const setter = (nextPropertyValue: R) => {
		const getterString = getter.toString();
		const propertyMatch = getterPropertyRegex.exec(getterString);
		if (propertyMatch != null) {
			const properties = propertyMatch[2].split(/\??\./).filter(p => p.trim() !== '');
			const nextState = (
				(properties.length)
				? createShallowClone(subject.value) as T
				: nextPropertyValue as any
			);

			// TODO: move logic into a new `cloneSet(object, value, properties)` function
			let currentStateProp = state;
			let currentCloneStateProp = nextState;
			properties.forEach((property, index) => {
				if (currentStateProp == null || currentCloneStateProp == null) {
					throw new Error(
						`null reference exception while trying to access x${propertyMatch[2]} on object:\n`
						+ JSON.stringify(state)
					);
				}

				(currentCloneStateProp as any)[property] = (
					(index === properties.length - 1)
					? nextPropertyValue
					: createShallowClone((currentStateProp as any)[property])
				);
			});

			subject.next(nextState);
		} else {
			throw new Error(
				'`getter` argument of `useSubject` must be a simple property getter (e.g. `x => x.user.name`)'
				+ ' in order for setter to work. Received:\n' + getterString
			);
		}
	};

	return [ propState, setter ];
}
/*
export function useSubject<T, R>(subject: Subject<T>, getter?: (item: T) => R): [ R | null, (nextValue: R) => void ] {
	const startState = (subject instanceof BehaviorSubject)
		? subject.value as T
		: null;

	const [ state, setState ] = useState(startState);
	useEffect(() => {
		const observer = (nextValue: T) => setState(nextValue);
		subject.subscribe(observer);
		return () => subject.unsubscribe(observer);
	}, [ subject ]);

	return [ state, subject.next ];
}
*/

// TODO: add function getter support
const getterPropertyRegex = /^\s*\(?(\w+)\)?\s*=>\s*\1((?:\??\.\w+)*)$/;

function createEmptyClone<T>(source: T): T {
	if (Array.isArray(source)) {
		return [] as any;
	} else if (source != null && typeof source === 'object') {
		return Object.create(Object.getPrototypeOf(source));
	}

	return source;
}

function createShallowClone<T>(source: T): T {
	const clone = createEmptyClone(source);

	if (source != null && typeof source === 'object') {
		Object.getOwnPropertyNames(source).forEach(property => {
			const propertyDescriptor = Object.getOwnPropertyDescriptor(source, property);
			if (propertyDescriptor) {
				Object.defineProperty(clone, property, propertyDescriptor);
			}
			(clone as any)[property] = (source as any)[property];
		});
	}

	return clone;
}

/**
 * React hook used to manage the value a @see Subject.
 * @returns Tuple containing the current/last value and a value setter.
 *
export function useSubjectProp<T, R>(subject: Subject<T>, getter: (item: T | null) => R): [ R, (nextValue: R) => void ];
export function useSubjectProp<T, R>(subject: BehaviorSubject<T>, getter: (item: T) => R): [ R, (nextValue: R) => void ];
export function useSubjectProp<T, R>(subject: Subject<T>, getter: (item: T | null) => R): [ R, (nextValue: R) => void ] {
	const startState = (subject instanceof BehaviorSubject)
		? subject.value as T
		: null;

	const [ state, setState ] = useState(startState);

	// TODO: useReducer instead of useState followed by useEffect?
	const [ propState, setPropState ] = useState(getter(startState));
	useEffect(() => {
		setPropState(getter(state));
	}, [ getter, state, setPropState ]);

	useEffect(() => {
		const observer = (nextValue: T) => setState(nextValue);
		subject.subscribe(observer);
		return () => subject.unsubscribe(observer);
	}, [ subject ]);

	const setter = (nextPropertyValue: R) => {
		const getterString = getter.toString();
		const propertyMatch = getterPropertyRegex.exec(getterString);
		if (propertyMatch != null) {
			const properties = propertyMatch[2].split(/\??\./);
			const nextState = createShallowClone(state) as T;

			// TODO: move logic into a new `cloneSet(object, value, properties)` function
			let currentStateProp = state;
			let currentCloneStateProp = nextState;
			properties.forEach((property, index) => {
				if (currentStateProp == null || currentCloneStateProp == null) {
					throw new Error(
						`null reference exception while trying to access x${propertyMatch[2]} on object:\n`
						+ JSON.stringify(state)
					);
				}

				(currentCloneStateProp as any)[property] = (
					(index === properties.length - 1)
					? nextPropertyValue
					: createShallowClone((currentStateProp as any)[property])
				);
			});
			subject.next(nextState);
		} else {
			throw new Error(
				'`getter` argument of `useSubject` must be a simple property getter (e.g. `x => x.user.name`)'
				+ ' in order for setter to work.'
			);
		}
	};

	return [ propState, setter ];
}
*/
