import { Tile } from '../model';
import { tiles } from './Tiles';

export const bridges: Map<Tile, Tile> = new Map([
	[ tiles[4], tiles[62] ],
	[ tiles[38], tiles[49] ]
]);
