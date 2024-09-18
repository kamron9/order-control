// utils/debounce.ts
export function debounce(func: Function, wait: number) {
	let timeout: number | undefined
	return (...args: any[]) => {
		if (timeout) {
			clearTimeout(timeout)
		}
		timeout = window.setTimeout(() => func(...args), wait)
	}
}
