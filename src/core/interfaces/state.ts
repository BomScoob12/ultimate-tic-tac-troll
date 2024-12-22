import { MiniBoard, UltimateBoard } from "./core";

export interface GameState {
	board: UltimateBoard;
	currentPlayer: string;
	lastPlayedMiniBoardId: string | null;
	isGameOver: boolean;
}

export interface GameRules {
	playMove(cellId: string): void;
	checkMiniBoardWinner(miniBoard: MiniBoard): string | null;
	checkUltimateWinner(board: UltimateBoard): string | null;
	resetGame(): void;
}
