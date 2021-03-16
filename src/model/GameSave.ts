import { Player } from './Player';
import { CardType } from './CardType';

export interface GameSave {
	/** Deck to draw from. */
	deck: CardType[];
	/** Last card drawn from the deck */
	lastCard: CardType | null;
	/** Players in the game. */
	players: Player[];
	/** State the overall game is in. */
	state: 'complete' | 'in-progress' | 'new';
	/** Index of the player currently taking a turn */
	turn: number;
}
