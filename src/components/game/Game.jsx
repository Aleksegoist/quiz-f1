import React from 'react';
import style from './Game.module.css';

const Game = () => {
  return (
    <div className='container'>
      <div className={style.game}>
        <div className={style.progress}>
          <div style={{ width: '50%' }} className={style.progress_inner}></div>
        </div>
        <h1>What is bolid?</h1>
        <ul>
          <li>This is ккккккк</li>
          <li>This is уууууууу</li>
          <li>This is 33333333</li>
        </ul>
      </div>
    </div>
  );
};

export default Game;
