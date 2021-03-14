import React, { useContext } from 'react';
import { AppContext } from './AppContext'
import { Dialog } from './Dialog';
import { useSubject } from './lib';
import './EndGame.scss';

export const EndGame: React.FC = () => {
	const { gameService } = useContext(AppContext);
	const [ { players, state, turn } ] = useSubject(gameService.save);

	return (state !== 'complete') ? null : <Dialog content={
		<div className="EndGame">
			<h2 className="EndGame-title">
				Congratulations {players[turn].name}!
			</h2>
			<div className="EndGame-actions">
				<button onClick={() => gameService.startNewGame()} type="button">Play Again?</button>
			</div>
		</div>
	} />;
}