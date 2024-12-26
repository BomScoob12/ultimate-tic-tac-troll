'use client';

import MiniBoard from '@/components/MiniBoard';
import { MiniBoardController } from '@/core/controllers/MiniBoardController';

const miniBoardController = new MiniBoardController('a');

export default function Game() {
  return (
    <div className="flex flex-col">
      <div>This is game page</div>
      <MiniBoard miniBoardController={miniBoardController} />
    </div>
  );
}
