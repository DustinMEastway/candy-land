import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { tiles } from './data';
import { useSubject } from './lib';
import './Players.scss';

export const Players: React.FC = () => {
	const { save } = useContext(AppContext).gameService;
	const [ { players } ] = useSubject(save);

	return <>{
		players.map((p, i) => <div
			className={`Player ${p.className}`}
			key={i}
			style={{
				left: `${tiles[p.position].x}%`,
				top: `${tiles[p.position].y}%`
			}}
		></div>)
	}</>;
}
