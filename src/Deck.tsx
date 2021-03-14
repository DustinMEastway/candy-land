import React, { useContext } from 'react';
import {
	bridges,
	characterCards,
	colorCards,
	colorCardsCount,
	doubleColorCardsCount,
	tiles,
	totalCardsCount
} from './data';
import { useSubject } from './lib';
import { AppContext } from './AppContext';
import { CardType, Tile, TileType } from './model';
import './Deck.scss';

const getNextTile = (tiles: Tile[], type: TileType) => tiles.find(tile => tile.type === type);

export const Deck: React.FC = () => {
	const { gameSaveService } = useContext(AppContext);
	// const [ save, setSave ] = useSubject(gameSaveService.save);
	// const { lastCard, players, turn } = save;
	const [ lastCard, setLastCard ] = useSubject(gameSaveService.save, s => s.lastCard);
	const [ players, setPlayers ] = useSubject(gameSaveService.save, s => s.players);
	const [ , setState ] = useSubject(gameSaveService.save, s => s.state);
	const [ turn, setTurn ] = useSubject(gameSaveService.save, s => s.turn);

	return <div className="Deck">
		<button className="Deck-draw-pile" onClick={() => {
			const cardNumber = Math.floor(Math.random() * totalCardsCount);
			let card: CardType;

			if (cardNumber < colorCardsCount) {
				card = colorCards[cardNumber % colorCards.length];
			} else if (cardNumber < colorCardsCount + doubleColorCardsCount) {
				card = '2_' + colorCards[cardNumber % colorCards.length] as CardType;
			} else {
				card = characterCards[cardNumber % characterCards.length];
			}

			const player = players[turn];
			const isDouble = card.startsWith('2_');
			const color = card.replace(/^2_/, '') as TileType;

			let tilesToSearch: Tile[];
			if ((characterCards as CardType[]).includes(card)) {
				tilesToSearch = tiles;
			} else {
				const currentTile = tiles[player.position];
				tilesToSearch = tiles.slice(tiles.indexOf(currentTile) + 1);
			}

			let tile = getNextTile(tilesToSearch, color);
			if (tile && isDouble) {
				tile = getNextTile(tiles.slice(tiles.indexOf(tile) + 1), color);
			}

			if (tile && bridges.has(tile)) {
				tile = bridges.get(tile);
			}

			// const newSave = { ...save };
			setLastCard(card);
			setPlayers(players.map((p, i) =>
				(i === turn && tile) ? { ...p, position: tiles.indexOf(tile) } : p
			));
			if (tile === tiles[tiles.length - 1]) {
				setState('complete');
			} else {
				setTurn((turn + 1) % players.length);
			}
			// setSave(newSave);
		}}>
		</button>
		<div className={'Deck-discard-pile' + (lastCard ? ` Deck-discard-pile--${lastCard}` : '')}></div>
	</div>;
};
