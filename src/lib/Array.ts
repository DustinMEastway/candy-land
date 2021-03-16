/** Use the Fisher-Yates shuffle algorithm (with Knuth's improvement) to shuffle an array. */
export function shuffle<T>(items: T[]): T[] {
	items = items.map(x => x);

	for (let i = items.length - 1; i > 1; --i) {
		const randomIndex = Math.round(Math.random() * i);
		const temp = items[i];
		items[i] = items[randomIndex];
		items[randomIndex] = temp;
	}

	return items;
}

/** Create an array going from a starting number (inclusive) to an ending number (exclusive). */
export function range(stop: number): number[];
export function range(start: number, stop?: number, step?: number): number[];
export function range(start: number, stop?: number, step?: number): number[] {
	if (stop == null) {
		stop = start;
		start = 0;
	}

	if (step == null) {
		step = (stop > start) ? 1 : -1;
	}

	if (step === 0 || (step > 0 && stop < start) || (step < 0 && stop < start)) {
		return [];
	}

	const items: number[] = [];
	for (let item = start; (step > 0) ? item < stop : item > stop; item += step) {
		items.push(item);
	}

	return items;
}