import { CharacterTile, ColorTile } from '../model';

export const characterCards: CharacterTile[] = [ 'candy-cane', 'candy-heart', 'gumdrop', 'ice-cream', 'peanut-brittle', 'sucker' ];

export const colorCards: ColorTile[] = [ 'blue', 'green', 'orange', 'purple', 'red', 'yellow' ];

export const colorCardsCount = colorCards.length * 8;

export const doubleColorCardsCount = colorCards.length * 2;

export const totalCardsCount = colorCardsCount + doubleColorCardsCount + characterCards.length;
