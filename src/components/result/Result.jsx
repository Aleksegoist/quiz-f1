import React from 'react';
import style from './Result.module.css';
import Congrats from '../../assets/pngwing.png';

const Result = () => {
  return (
    <div className='container'>
      <div className={style.result}>
        <img src={Congrats} alt='/' />
        <h2>You answered 2 questions out of 10 correctly</h2>
        <button>Will you try again?</button>
      </div>
    </div>
  );
};

export default Result;
