import { MiniBoard } from '@/core/interfaces';
import { DefaultMiniBoard } from '@/core/models';

export class MiniBoardController {
  private miniBoardState: MiniBoard;
  private isXTurn: boolean = true;

  constructor(public miniBoardId: string) {
    this.miniBoardState = new DefaultMiniBoard(miniBoardId);
  }

  getMiniBoardState() {
    console.log('get mini board state');
    return this.miniBoardState;
  }

  setMiniBoardWinner(winner: string) {
    this.miniBoardState.winner = winner;
    this.setMiniBoardPlayable(false);
  }

  setMiniBoardPlayable(playable: boolean) {
    this.miniBoardState.isPlayable = playable;
  }

  handleClickCell(cellId: string) {
    const cell = this.miniBoardState.cells.find((cell) => cell.id === cellId);

    // cell exists and value is empty and miniBoard is playable
    if (cell && !cell.value && this.miniBoardState.isPlayable) {
      cell.value = this.isXTurn ? 'X' : 'O';
      this.isXTurn = !this.isXTurn;
      this.calculateWinner();

      console.log(this.miniBoardState);
    } else {
        throw new Error('Invalid move');
    }
  }

  calculateWinner() {
    const cells = this.miniBoardState.cells;
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        cells[a].value &&
        cells[a].value === cells[b].value &&
        cells[a].value === cells[c].value
      ) {
        this.setMiniBoardWinner(cells[a].value);
        return cells[a].value;
      }
    }
    return null;
  }
}
