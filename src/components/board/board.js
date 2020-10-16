import React from 'react';

import './board.scss';

import MainIndicatorsContainer from '../../containers/main-indicators-container';

const Board = () => {
  return (
    <div className="board">
      <img src="https://photos.smugmug.com/MyMemories/Commercial-Photos/i-b87vX72/0/5cdd7b7c/L/Partly%20Cloudly%20%286%29-L.jpg"
       alt="board-img"/>
      <MainIndicatorsContainer/>
    </div>
  );
}
export default Board;
