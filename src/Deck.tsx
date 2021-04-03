import React, { useContext } from 'react';
import { bridges, characterCards, dotTiles, tiles } from './data';
import { useSubject } from './lib';
import { AppContext } from './AppContext';
import { CardType, Tile, TileType } from './model';
import './Deck.scss';

export const Deck: React.FC = () => {
	const { gameService } = useContext(AppContext);
	const [ lastCard ] = useSubject(gameService.save, s => s.lastCard);

	return <div className="Deck">
		<button className="Deck-pile Deck-draw-pile" onClick={() => gameService.takeTurn()}></button>
		<div className={'Deck-pile Deck-discard-pile' + (lastCard ? ` Deck-discard-pile--${lastCard}` : '')}></div>
	</div>;
};
