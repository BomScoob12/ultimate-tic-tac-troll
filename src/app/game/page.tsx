'use client';

import { DefaultCell } from '@/core';
import Square from './SquareComponent';

export default function Game() {
  const handleClickSquare = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    console.log(target.id);
  };

  return (
    <div>
      <div>This is game page</div>
      <Square
        cellValue={new DefaultCell('a01', 'X')}
        handleClick={handleClickSquare}
      ></Square>
    </div>
  );
}
