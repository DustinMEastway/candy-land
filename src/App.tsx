import React from 'react';
import { Deck } from './Deck';
import { Players } from './Players';
import { PlayerPicker } from './PlayerPicker';
import { TurnDisplay } from './TurnDisplay';
import './App.scss';

export const App: React.FC = () => (
	<div className="App">
		<PlayerPicker />
		<h1 className="App-Header">Candy Land</h1>
		<div className="App-Content">
			<div className="App-Board">
				<Players />
			</div>
			<div className="App-SideContent">
				<TurnDisplay />
				<Deck />
			</div>
		</div>
	</div>
);
