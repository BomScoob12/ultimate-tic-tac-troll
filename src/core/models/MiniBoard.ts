import { Cell, MiniBoard } from "../interfaces";
import { DefaultCell } from "./Cell";

export class DefaultMiniBoard implements MiniBoard {
	cells: Cell[] = [];
	winner: string | null = null;
	isPlayable: boolean = true;

	constructor(public id: string) {
		for (let i = 0; i < 9; i++) {
			this.cells.push(new DefaultCell(`${id}-${i}`));
		}
	}
}
