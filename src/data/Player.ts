import { PlayerOption } from '../model';

export const maxPlayers = 4;

export const minPlayers = 2;

export const playerOptions: PlayerOption[] = [ 'Red', 'Blue', 'Brown', 'Purple' ].map(color => ({
	name: color,
	value: `Player-${color.toLowerCase()}`
}));
