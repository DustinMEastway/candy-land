import { createContext } from 'react';
import { GameService } from './services';

export interface AppContextType {
	gameService: GameService;
}

export function createAppContext(): AppContextType {
	return {
		gameService: new GameService()
	};
}

export const defaultAppContext = createAppContext();

export const AppContext = createContext<AppContextType>(defaultAppContext);
