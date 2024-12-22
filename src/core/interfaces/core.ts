export interface Cell {
	id: string;
	value: string | null;
}

export interface MiniBoard {
	id: string;
	cells: Cell[];
	winner: string | null
	isPlayable: boolean;
}

export interface UltimateBoard {
	miniBoards: MiniBoard[];
	overallWinner: string | null;
}
