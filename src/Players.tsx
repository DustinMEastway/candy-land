import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { tiles } from './data';
import { useSubject } from './lib';
import './Players.scss';

export const Players: React.FC = () => {
	const { gameSaveService } = useContext(AppContext);
	const [ players ] = useSubject(gameSaveService.save, s => s.players);

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
