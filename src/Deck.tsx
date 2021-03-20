import React, { useContext } from 'react';
import { bridges, characterCards, dotTiles, tiles } from './data';
import { useSubject } from './lib';
import { AppContext } from './AppContext';
import { CardType, Tile, TileType } from './model';
import './Deck.scss';

const getNextTile = (tiles: Tile[], type: TileType) => tiles.find(tile => tile.type === type);

export const Deck: React.FC = () => {
	const { gameService } = useContext(AppContext);
	const { save } = gameService;
	const [ lastCard, setLastCard ] = useSubject(save, s => s.lastCard);
	const [ players, setPlayers ] = useSubject(save, s => s.players);
	const [ , setState ] = useSubject(save, s => s.state);
	const [ turn, setTurn ] = useSubject(save, s => s.turn);

	return <div className="Deck">
		<button className="Deck-draw-pile" onClick={() => {
			const player = players[turn];
			const card = gameService.drawCard();
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
				tile = getNextTile(tilesToSearch, color);
				if (tile && isDouble) {
					tile = getNextTile(tiles.slice(tiles.indexOf(tile) + 1), color);
				}
			}

			if (tile && bridges.has(tile)) {
				tile = bridges.get(tile);
			} else if (!tile) {
				// if no tile is found, then the player is at the end which is a rainbow tile
				tile = tiles[tiles.length - 1];
			}

			setLastCard(card);
			setPlayers(players.map((p, i) =>
				(i === turn && tile) ? { ...p, position: tiles.indexOf(tile) } : p
			));
			if (tile === tiles[tiles.length - 1]) {
				setState('complete');
			} else {
				setTurn((turn + 1) % players.length);
			}
		}}>
		</button>
		<div className={'Deck-discard-pile' + (lastCard ? ` Deck-discard-pile--${lastCard}` : '')}></div>
	</div>;
};
