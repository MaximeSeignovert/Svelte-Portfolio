// src/themeStore.js
import { writable } from 'svelte/store';
import themes from '../data/theme.json';

// Store pour le thème actuel
const initialTheme = getRandomTheme(themes);
export const currentTheme = writable(initialTheme);

// Fonction pour obtenir un thème aléatoire
function getRandomTheme(themes) {
  const randomIndex = Math.floor(Math.random() * themes.length);
  return themes[randomIndex];
}

// Fonction pour changer de thème
export function changeTheme(theme) {
  applyTheme(theme);

  // Mettre à jour le store du thème actuel
  currentTheme.set(theme);
}

// Fonction pour appliquer un thème
function applyTheme(theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--dark-accentuation-color', theme.darkColor);
    document.documentElement.style.setProperty('--light-accentuation-color', theme.lightColor);
    document.documentElement.style.setProperty('--dark-foreground-color', theme.textDark);
    document.documentElement.style.setProperty('--light-foreground-color', theme.textLight);

    // Mettre à jour le favicon
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = theme.imgLink;
  }
}

// Appliquer immédiatement le thème initial si on est dans un navigateur
if (typeof document !== 'undefined') {
  applyTheme(initialTheme);
}

export function changeToRandomTheme(){
  changeTheme(getRandomTheme(themes));
}
