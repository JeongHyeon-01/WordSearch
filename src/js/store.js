// store.js
import { writable } from "svelte/store";

export const isMenuOpen = writable(false);
export const navHeight = writable(0);

export function toggleMenu() {
  isMenuOpen.update((state) => !state);
  navHeight.update((height) => (height === 0 ? 200 : 0));
}
