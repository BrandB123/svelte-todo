import { writable } from 'svelte/store';
import type { TodoObject } from '$lib/types';

const localStorageTodos: TodoObject[] = typeof window !== 'undefined' && localStorage.getItem('todosList')
  ? JSON.parse(localStorage.getItem('todosList'))
  : [];
export const todosList = writable(localStorageTodos);

todosList.subscribe((value) => {
  if (typeof window !== 'undefined'){
    localStorage.setItem('todosList', JSON.stringify(value));
    // localStorage.setItem('todosList', []);
  }
});