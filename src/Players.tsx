import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { useSubject } from './lib';

export const Players: React.FC = () => {
	const { gameSaveService } = useContext(AppContext);
	const [ save ] = useSubject(gameSaveService.save);

	return <>{
		save.players.map((p, i) => <div key={i}>{p.name}</div>)
	}</>;
}
