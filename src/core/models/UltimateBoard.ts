import { MiniBoard, UltimateBoard } from '../interfaces';
import { DefaultMiniBoard } from './MiniBoard';

export class DefaultUltimateBoard implements UltimateBoard {
	miniBoards: MiniBoard[] = [];
	overallWinner: string | null = null;

	constructor() {
		for (let i = 0; i < 9; i++) {
			this.miniBoards.push(new DefaultMiniBoard(`board-${i}`));
		}
	}
}
