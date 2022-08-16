import React from 'react';
import style from './Result.module.css';
import Congrats from '../../assets/pngwing.png';
import { questions } from '../../data';

const Result = ({ correct }) => {
  return (
    <div className='container'>
      <div className={style.result}>
        <img src={Congrats} alt='/' />
        <h2>
          You answered {correct} questions out of {questions.length} correctly
        </h2>
        <a href='/'>
          <button>Will you try again?</button>
        </a>
      </div>
    </div>
  );
};

export default Result;
