import { createContext } from 'react';
import { GameSaveService } from './services';

export interface AppContextType {
	gameSaveService: GameSaveService;
}

export function createAppContext(): AppContextType {
	return {
		gameSaveService: new GameSaveService()
	};
}

export const defaultAppContext = createAppContext();

export const AppContext = createContext<AppContextType>(defaultAppContext);
