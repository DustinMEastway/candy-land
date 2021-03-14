import { Tile } from '../model';
import { tiles } from './Tiles';

export const bridges: Map<Tile, Tile> = new Map([
	[ tiles[4], tiles[58] ],
	[ tiles[33], tiles[46] ]
]);
