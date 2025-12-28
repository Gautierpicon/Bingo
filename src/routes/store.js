import { writable } from 'svelte/store';

export const useStar = writable(false);

if (typeof window !== 'undefined') {
	useStar.set(localStorage.getItem('useStar') === 'true');

	useStar.subscribe((value) => {
		localStorage.setItem('useStar', value);
	});
}

export const hasPlayedGridAnimation = writable(false);

if (typeof window !== 'undefined') {
	hasPlayedGridAnimation.set(sessionStorage.getItem('hasPlayedGridAnimation') === 'true');

	hasPlayedGridAnimation.subscribe((value) => {
		sessionStorage.setItem('hasPlayedGridAnimation', value);
	});
}

export const gameCode = writable('');

export const players = writable([]);

export const isHost = writable(false);

if (typeof window !== 'undefined') {
	isHost.set(localStorage.getItem('isHost') === 'true');

	isHost.subscribe((value) => {
		localStorage.setItem('isHost', value);
	});
}
