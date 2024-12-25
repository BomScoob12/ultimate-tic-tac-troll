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
    const idxTarget = this.miniBoardState.cells.findIndex(
      (cell) => cell.id === cellId
    );
    const targetCell = this.miniBoardState.cells[idxTarget];

    // cell exists and value is empty and miniBoard is playable
    if (targetCell && !targetCell.value && this.miniBoardState.isPlayable) {
      targetCell.value = this.isXTurn ? 'X' : 'O';
      this.isXTurn = !this.isXTurn;

      // update cell
      this.miniBoardState.cells.splice(idxTarget, 1, targetCell);

      this.calculateWinner();
    } else {
      if (!targetCell) {
        throw new Error('Invalid move');
      } else if (targetCell.value) {
        throw new Error('Cell already filled');
      } else {
        throw new Error('Mini board is not playable');
      }
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
        console.log('winner is', cells[a].value);
        return cells[a].value;
      }
    }
    return null;
  }
}
