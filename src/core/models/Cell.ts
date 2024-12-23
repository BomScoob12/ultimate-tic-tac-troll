import { Cell } from '../interfaces';

export class DefaultCell implements Cell {
	constructor(public id: string, public value: string | null = null) {}
}
