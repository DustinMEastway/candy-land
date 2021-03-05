import { maxPlayers, playerOptions } from '../data';
import { Player } from '../model';
import { BehaviorSubject } from '../lib';

export interface GameSave {
	/** Players in the game. */
	players: Player[];
	/** State the overall game is in. */
	state: 'complete' | 'in-progress' | 'new';
}

export class GameSaveService {
	readonly save = new BehaviorSubject<GameSave>(this.createNewSave());

	protected createNewSave(): GameSave {
		return ({
			players: playerOptions.slice(0, maxPlayers).map(({ name, value }) => ({
				className: value,
				name,
				position: 0
			})),
			state: 'new'
		});
	}
}
