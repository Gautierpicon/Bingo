import { writable } from 'svelte/store';

export const useStar = writable(false);

if (typeof window !== 'undefined') {
	useStar.set(localStorage.getItem('useStar') === 'true');

	useStar.subscribe((value) => {
		localStorage.setItem('useStar', value);
	});
}
