'use client';

import { Cell } from '@/core';
import React from 'react';

interface SquareProps {
  cellValue: Cell;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Square({ cellValue, handleClick }: SquareProps) {
  return (
    <div>
      <button
        className="w-32 h-32 bg-white text-black font-bold border-2 border-red-600"
        onClick={handleClick}
        id={cellValue.id}
      >
        id: {cellValue.id} value: {cellValue.value}
      </button>
    </div>
  );
}
