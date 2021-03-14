import React, { useContext } from 'react';
import { maxPlayers, minPlayers, playerOptions } from './data';
import { useSubject } from './lib';
import { Player } from './model';
import { AppContext } from './AppContext';
import { Dialog } from './Dialog';
import './PlayerPicker.scss';

export const PlayerPicker: React.FC = () => {
	const { save } = useContext(AppContext).gameService;
	const [ players, setPlayers ] = useSubject(save, s => s.players);
	const [ gameState, setGameState ] = useSubject(save, s => s.state);
	const setPlayer = (partialPlayer: Partial<Player>, playerIndex: number) => {
		setPlayers(players.map((p, i) => (i === playerIndex) ? { ...p, ...partialPlayer } : p));
	};

	return (gameState !== 'new') ? null : <Dialog content={
		<div className="PlayerPicker">
			<h2 className="PlayerPicker-title">Select Players</h2>
			<div className="PlayerPicker-content">
				{players.map((player, playerIndex) =>
					<div className="PlayerPicker-player-row" key={playerIndex}>
						<select
							onChange={event => setPlayer({ className: event.currentTarget.value }, playerIndex)}
							value={player.className}
						>{playerOptions.map(playerOption =>
							<option key={playerOption.value} value={playerOption.value}>{playerOption.name}</option>
						)}</select>
						<input
							onChange={e => setPlayer({ name: e.currentTarget.value }, playerIndex)}
							value={player.name}
						/>
						{
							(players.length <= minPlayers) ? null : <button
								className="PlayerPicker-remove-button"
								onClick={() => setPlayers(
									players.slice(0, playerIndex).concat(players.slice(playerIndex + 1))
								)}
								type="button"
							>-</button>
						}
					</div>
				)}
				{
					(players.length >= maxPlayers) ? null : <button
						className="PlayerPicker-add-button"
						onClick={() => {
							const { name, value } = (
								playerOptions.find(o => players.every(p => p.className !== o.value))
								|| playerOptions[0]
							);
							setPlayers(players.concat({ className: value, name, position: 0 }));
						}}
						type="button"
					>+</button>
				}
			</div>
			<div className="PlayerPicker-actions">
				<button onClick={() => setGameState('in-progress')} type="button">Start</button>
			</div>
		</div>
	} />;
};
