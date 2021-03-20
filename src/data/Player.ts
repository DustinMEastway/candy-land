export const maxPlayers = 4;

export const minPlayers = 2;

export const playerOptions = [ 'red', 'blue', 'brown', 'purple' ].map(color => ({
	name: color,
	value: `Player-${color}`
}));