import { PlayerOption } from '../model';

export const maxPlayers = 4;

export const minPlayers = 2;

export const playerOptions: PlayerOption[] = [ 'Pink', 'Blue', 'Orange', 'Purple' ].map(color => ({
	name: color,
	value: `Player-${color.toLowerCase()}`
}));
