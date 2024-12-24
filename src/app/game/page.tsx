'use client';

import { useState } from 'react';
import Square from './SquareComponent';
import { MiniBoardController } from '@/core/controllers/MiniBoardController';

const miniBoardController = new MiniBoardController('a');

export default function Game() {
  const [miniBoardState, setMiniBoardState] = useState(
    miniBoardController.getMiniBoardState()
  );

  const handleClickSquare = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    try {
      miniBoardController.handleClickCell(target.id);
    } catch (error) {
      console.log(error);
    }
    setMiniBoardState(miniBoardController.getMiniBoardState());
  };

  const renderMiniBoard = () => {
    const cells = miniBoardState.cells;
    return cells.map((cell) => {
      return (
        <Square
          key={cell.id}
          cellValue={cell}
          handleClick={handleClickSquare}
        />
      );
    });
  };

  return (
    <div className="flex flex-col">
      <div>This is game page</div>
      <div className="container flex">
        <div className="grid grid-cols-3 grid-rows-3 gap-y-1 gap-x-1">
          {renderMiniBoard()}
        </div>
      </div>
    </div>
  );
}
