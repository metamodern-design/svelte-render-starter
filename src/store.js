import { writable } from 'svelte/store';

export const location = writable('/');
export const mobileMenuIsOpen = writable(false);
