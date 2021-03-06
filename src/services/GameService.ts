import {
	bridges,
	characterCards,
	colorCards,
	colorCardsCount,
	dotTiles,
	doubleColorCardsCount,
	maxPlayers,
	playerOptions,
	tiles
} from '../data';
import { CardType, GameSave, Player, PlayerOption, Tile, TileType } from '../model';
import { range, shuffle, wait, Subject } from '../lib';

export class GameService {
	/** Save containing the current game state. */
	readonly save = new Subject<GameSave>(GameService.createNewSave());

	/** Reset @see save to a new game. */
	startNewGame(): void {
		this.save.next(GameService.createNewSave());
	}

	/** Have the current player take a turn. */
	takeTurn(): void {
		let currentSave = { ...this.save.value };
		const { players, turn } = currentSave;
		const player = players[turn];
		currentSave = GameService.drawCard(currentSave);
		const card = currentSave.lastCard!;
		const isDouble = card.startsWith('2_');
		const color = card.replace(/^2_/, '') as TileType;

		const currentPlayerTile = tiles[player.position];
		let tilesToSearch: Tile[];
		if ((characterCards as CardType[]).includes(card)) {
			tilesToSearch = tiles;
		} else {
			tilesToSearch = tiles.slice(tiles.indexOf(currentPlayerTile) + 1);
		}

		let tile: Tile | undefined;
		if (dotTiles.has(currentPlayerTile) && currentPlayerTile.type !== color) {
			// keep player where they are if they do not draw the correct color for a dot tile
			tile = currentPlayerTile;
		} else {
			tile = GameService.getNextTile(tilesToSearch, color);
			if (tile && isDouble) {
				tile = GameService.getNextTile(tiles.slice(tiles.indexOf(tile) + 1), color);
			}
		}

		const newPosition = tiles.indexOf(tile!);
		let path = range(newPosition, player.position);

		if (tile && bridges.has(tile)) {
			tile = bridges.get(tile);
			path = [ tiles.indexOf(tile!), ...path];
		} else if (!tile) {
			// if no tile is found, then the player is at the end which is a rainbow tile
			tile = tiles[tiles.length - 1];
			path = range(tiles.length - 1, player.position);
		}

		currentSave.lastCard = card;
		if (tile === tiles[tiles.length - 1]) {
			currentSave.state = 'complete';
		} else {
			currentSave.turn = (turn + 1) % players.length;
		}

		this.save.next(currentSave);
		this.animateToTile(turn, path, newPosition < player.position);
	}

	/** Creates a new player from a player option. */
	public static createPlayer({ name, value }: PlayerOption): Player {
		return {
			backwards: false,
			className: value,
			id: value,
			name: name.substring(0, 1).toUpperCase() + name.substring(1),
			position: 0
		};
	}

	protected async animateToTile(playerIndex: number, path: number[], backwards: boolean): Promise<void> {
		while (path.length) {
			const save = { ...this.save.value };
			save.players = save.players.slice();
			save.players[playerIndex] = { ...save.players[playerIndex] };
			const player = save.players[playerIndex];
			player.position = path.pop()!;

			const lastMove = !path.length;
			player.backwards = !lastMove && backwards;
			this.save.next(save);

			if (!lastMove) {
				await wait(300);
			}
		}
	}

	/** Create a new shuffled deck. */
	protected static createDeck(): CardType[] {
		const deck = ([] as CardType[]).concat(
			// color cards
			range(colorCardsCount).map(i => colorCards[i % colorCards.length]),
			// double color cards
			range(doubleColorCardsCount).map(i => '2_' + colorCards[i % colorCards.length] as CardType),
			characterCards
		);

		return shuffle(deck);
	}

	/** Create a new save. */
	protected static createNewSave(): GameSave {
		return ({
			deck: this.createDeck(),
			lastCard: null,
			players: playerOptions.slice(0, maxPlayers).map(this.createPlayer),
			state: 'new',
			turn: 0
		});
	}

	/** Draw the card at the top of the deck. */
	protected static drawCard(currentSave: GameSave): GameSave {
		const save = { ...currentSave };
		const deck = (save.deck.length) ? save.deck : this.createDeck();
		save.lastCard = deck[0];
		save.deck = deck.slice(1);

		return save;
	}

	/** Gets the first tile from @see tiles of the requested @type. */
	protected static getNextTile(tiles: Tile[], type: TileType) {
		return tiles.find(tile => tile.type === type);
	}
}
