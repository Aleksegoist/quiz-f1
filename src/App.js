import { useState } from 'react';
import Game from './components/game/Game';
import Result from './components/result/Result';
import './index.css';
import { questions } from './data'

const App = () => {
  const [step, setStep] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index)
    setStep(step + 1)
  }

  return (
    <div className='App'>
      {
        step != questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> : <Result />
      }


    </div>
  );
};

export default App;
