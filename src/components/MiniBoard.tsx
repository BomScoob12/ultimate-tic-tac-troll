'use client';

import { useState } from 'react';
import Square from '@/components/Square';
import { MiniBoardController } from '@/core/controllers/MiniBoardController';

interface MiniBoardProps {
  miniBoardController: MiniBoardController;
}

export default function MiniBoard({ miniBoardController }: MiniBoardProps) {
  const [miniBoardState, setMiniBoardState] = useState(
    miniBoardController.getMiniBoardState()
  );

  const handleClickSquare = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    try {
      miniBoardController.handleClickCell(target.id);
    } catch (error) {
      console.warn(error);
    }

    // update state with new object of state
    setMiniBoardState({
      ...miniBoardController.getMiniBoardState(),
    });
  };

  const renderCell = (idx: number) => {
    const cell = miniBoardState.cells[idx];
    return (
      <Square key={cell.id} cellValue={cell} handleClick={handleClickSquare} />
    );
  };

  return (
    <>
      <div>This is board</div>
      <div className="container flex">
        <div className="grid grid-cols-3 grid-rows-3 gap-y-1 gap-x-1">
          {miniBoardState.cells.map((_, idx) => renderCell(idx))}
        </div>
      </div>
    </>
  );
}
