import React from 'react';
import { Players } from './Players';
import { PlayerPicker } from './PlayerPicker';
import './App.scss';

export const App: React.FC = () => (
	<div className="App">
		<PlayerPicker />
		<div className="App-Board" style={{ backgroundImage: `url('/board.png')` }}>
			<Players />
		</div>
	</div>
);
