import React from 'react';
import WordCardHeader from './WordCardHeader';
import './style.scss';
import { IWord } from '../../types/word';

interface WordProps {
  word: IWord
}

const WordCard = ({ word }: WordProps) => {
  return (
    <>
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
    </>

  )
}

export default WordCard