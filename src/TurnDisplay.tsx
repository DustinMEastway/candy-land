import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { useSubject } from './lib';
import './TurnDisplay.scss';

export const TurnDisplay: React.FC = () => {
	const { gameSaveService } = useContext(AppContext);
	const [ { players, turn } ] = useSubject(gameSaveService.save);

	return <div className="TurnDisplay">{players[turn].name}'s Turn</div>;
};