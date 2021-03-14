import { maxPlayers, playerOptions } from '../data';
import { GameSave } from '../model';
import { Subject } from '../lib';

export class GameService {
	/** Save containing the current game state. */
	readonly save = new Subject<GameSave>(this.createNewSave());

	/** Reset @see save to a new game. */
	startNewGame(): void {
		this.save.next(this.createNewSave());
	}

	protected createNewSave(): GameSave {
		return ({
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
}
