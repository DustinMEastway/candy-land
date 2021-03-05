import { useState, useEffect } from 'react';

/** Function to handle value changes of an observable object. */
export type Observer<T> = (nextValue: T) => void;

/** Subject that can be observed by one or more @see Observer for changes in its value. */
export class Subject<T> {
	/** Used to track each @see Observer to notify them of changes. */
	protected _observers: Observer<T>[] = [];

	constructor() {
		this.next = this.next.bind(this);
	}

	/** Notify each @see Observer of the next value. */
	next(nextValue: T): void {
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

/** A @see Subject that keeps track of its current (initial/last) value. */
export class BehaviorSubject<T> extends Subject<T> {
	/** Initial value (provided to the constructor), then last value provided to @see next after its first call. */
	get value(): T {
		return this._value;
	}

	/**
	 * @see BehaviorSubject constructor.
	 * @prop _value: initial value of the subject.
	 */
	constructor(
		/** Current value of this @see Subject. */
		protected _value: T
	) {
		super();
	}

	/** @inheritdoc */
	next(nextValue: T): void {
		this._value = nextValue;
		super.next(nextValue);
	}
}

/**
 * React hook used to manage the value a @see Subject.
 * @returns Tuple containing the current/last value and a value setter.
 */
export function useSubject<T>(subject: BehaviorSubject<T>): [ T, (nextValue: T) => void ];
export function useSubject<T>(subject: Subject<T>): [ T | null, (nextValue: T) => void ];
export function useSubject<T>(subject: Subject<T>) {
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
