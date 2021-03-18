import React from 'react';
import { Deck } from './Deck';
import { EndGame } from './EndGame';
import { Players } from './Players';
import { PlayerPicker } from './PlayerPicker';
import { TurnDisplay } from './TurnDisplay';
import './App.scss';

export const App: React.FC = () => (
	<div className="App">
		<PlayerPicker />
		<EndGame />
		<div className="App-TopContent">
			<TurnDisplay />
			<Deck />
		</div>
		<div className="App-Board">
			<Players />
		</div>
	</div>
);
