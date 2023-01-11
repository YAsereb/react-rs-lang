import React, { useState } from 'react';
import WordCardHeader from '../WordCardHeader/WordCardHeader';
import './WordCard.scss';
import { IWord } from '../../types/word';
import WordCardButtons from '../WordCardButtons/WordCardButtons';

interface WordProps {
  word: IWord,
  isDisabledButton: boolean,
  setDisabledButton: React.Dispatch<React.SetStateAction<boolean>>
}

const WordCard = ({ word, isDisabledButton, setDisabledButton }: WordProps) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='card'>
      <WordCardHeader
        word={word}
        isDisabledButton={isDisabledButton}
        setDisabledButton={setDisabledButton}
      />
      {isLogin && <WordCardButtons word={word} />}
      <div className="card-content">
        <div className="card-content__block">
          <div className="card-content__example">{word.textExample}</div>
          <div className="card-content__example">{word.textMeaning}</div>
        </div>
        <div className="card-content__block">
          <div className="card-content__example">{word.textExampleTranslate}</div>
        </div>
        <div className="card-content__example">{word.textMeaningTranslate}</div>
      </div>
    </div>
  )
}

export default WordCard