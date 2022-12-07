import React from 'react';
import WordCardHeader from '../WordCardHeader/WordCardHeader';
import './WordCard.scss';
import { IWord } from '../../types/word';

interface WordProps {
  word: IWord
}

const WordCard = ({ word }: WordProps) => {


  return (
    <div className='card'>
      <WordCardHeader word={word} />
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