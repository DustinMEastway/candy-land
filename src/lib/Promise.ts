/** Creates a promise that waits the provided @see timeInMs before resolving. */
export function wait(timeInMs: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(() => resolve(), timeInMs)
	});
}