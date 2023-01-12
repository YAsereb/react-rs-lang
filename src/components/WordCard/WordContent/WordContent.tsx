import React from 'react'
import { IWord } from '../../../types/word'
import './WordContent.scss'

interface WordProps {
  word: IWord,
}

const WordContent = ({ word }: WordProps) => {

  return (
    <div className="card-content">
      <div className="card-content__block">
        <div className="card-content__example" dangerouslySetInnerHTML={{ __html: word.textExample }} />
        <div className="card-content__example" dangerouslySetInnerHTML={{ __html: word.textMeaning }} />
      </div>
      <div className="card-content__block">
        <div className="card-content__example">{word.textExampleTranslate}</div>
      </div>
      <div className="card-content__example">{word.textMeaningTranslate}</div>
    </div>
  )
}

export default WordContent