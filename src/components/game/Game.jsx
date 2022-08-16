import React from 'react';
import { questions } from '../../data';
import style from './Game.module.css';

const Game = ({ question, onClickVariant, step }) => {
  const percent = Math.round((step / questions.length) * 100);

  return (
    <div className='container'>
      <div className={style.game}>
        <div className={style.progress}>
          <div
            style={{ width: `${percent}%` }}
            className={style.progress_inner}
          ></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
