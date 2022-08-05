import React from 'react';
import Board from './components/Board';

const App: React.FC = () => {
  return (
    <div>
      <div>Minesweeper</div>
      <Board />
    </div>
  );
};

export default App;
