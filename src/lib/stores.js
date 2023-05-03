import { writable } from 'svelte/store';

export let currentTheme = writable('');
export let loading = writable(false);
