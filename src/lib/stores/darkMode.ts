import { writable } from 'svelte/store';

type Theme = "Light" | "Dark"

let savedTheme: string;

if (typeof window !== 'undefined'){
    savedTheme = JSON.parse(localStorage.getItem('theme'));
    console.log("Saved Theme: " + savedTheme);
}

const localStorageTheme = savedTheme === "dark" ? "dark" : "light";

export const theme = writable(localStorageTheme);

theme.subscribe((value) => {
    if (typeof window !== 'undefined'){
      localStorage.setItem('theme', JSON.stringify(value));
      // localStorage.setItem('theme', '');
    }
  });
