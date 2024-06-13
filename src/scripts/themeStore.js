// src/themeStore.js
import { writable } from 'svelte/store';

export const currentTheme = writable({
  Name: 'Alien',
  darkColor: '#22c55e',
  lightColor: '#16a34a',
  imgLink: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien.png'
});
