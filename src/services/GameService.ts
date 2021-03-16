import {
	characterCards,
	colorCards,
	colorCardsCount,
	doubleColorCardsCount,
	maxPlayers,
	playerOptions
} from '../data';
import { CardType, GameSave } from '../model';
import { range, shuffle, Subject } from '../lib';

export class GameService {
	/** Save containing the current game state. */
	readonly save = new Subject<GameSave>(this.createNewSave());

	/** Draw the card at the top of the deck. */
	drawCard(): CardType {
		const save = { ...this.save.value };
		const deck = (save.deck.length) ? save.deck : this.createDeck();
		save.lastCard = deck[0];
		save.deck = deck.slice(1);
		this.save.next(save);

		return save.lastCard;
	}

	/** Reset @see save to a new game. */
	startNewGame(): void {
		this.save.next(this.createNewSave());
	}

	protected createNewSave(): GameSave {
		return ({
			deck: this.createDeck(),
			lastCard: null,
			players: playerOptions.slice(0, maxPlayers).map(({ name, value }) => ({
				className: value,
				name,
				position: 0
			})),
			state: 'in-progress',
			turn: 0
		});
	}

	protected createDeck(): CardType[] {
		const deck = ([] as CardType[]).concat(
			// color cards
			range(colorCardsCount).map(i => colorCards[i % colorCards.length]),
			// double color cards
			range(doubleColorCardsCount).map(i => '2_' + colorCards[i % colorCards.length] as CardType),
			characterCards
		);

		return shuffle(deck);
	}
}
