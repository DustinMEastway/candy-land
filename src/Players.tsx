import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { tiles } from './data';
import { useSubject } from './lib';
import './Players.scss';

export const Players: React.FC = () => {
	const { save } = useContext(AppContext).gameService;
	const [ { players, turn } ] = useSubject(save);

	// render current player last
	const orderedPlayers = players.slice(turn + 1).concat(players.slice(0, turn + 1));

	return <>{
		orderedPlayers.map(p => {
			const { x, y } = tiles[p.position];
			const nextTile = tiles[p.position + 1];
			let className = `Player ${p.className}`;
			if (nextTile?.x < x) {
				className += ' Flip';
			}

			return <div
				className={className}
				key={p.id}
				style={{
					left: `${x}%`,
					top: `${y}%`
				}}
			></div>;
		})
	}</>;
}
