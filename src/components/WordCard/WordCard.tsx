import React, { useState } from 'react';
import WordCardHeader from '../WordCardHeader/WordCardHeader';
import './WordCard.scss';
import { IWord, IWordCard } from '../../types/word';
import WordCardButtons from '../WordCardButtons/WordCardButtons';

interface WordProps {
  word: IWord,

}

const WordCard = ({ word }: WordProps) => {
  const [isLogin, setIsLogin] = useState(false);


  return (
    <div className='card'>
      <WordCardHeader word={word} />
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