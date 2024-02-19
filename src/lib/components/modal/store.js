import { writable } from "svelte/store";

export const modal = writable();

export function openModal({ component, props = {} }) {
  modal.set({ component, props });
}

export function closeModal() {
  modal.set(null);
}
