import { maxPlayers, playerOptions } from '../data';
import { GameSave } from '../model';
import { Subject } from '../lib';

export class GameService {
	readonly save = new Subject<GameSave>(this.createNewSave());

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
