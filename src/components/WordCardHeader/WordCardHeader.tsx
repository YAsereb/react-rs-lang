import axios from 'axios'
import React from 'react'
import { IWord } from '../../types/word'
import './HeaderWordCard.scss'

interface WordCardHeaderProps {
  word: IWord
}

const WordCardHeader = ({ word }: WordCardHeaderProps) => {
  return (
    <div className="card-header__block">
      <h3>{word.word} </h3>
      <div className="card-header__info">
        <div>{word.wordTranslate} </div>
        <div> {word.transcription} </div>
        <button className="sound-word__btn">
          <svg>
            <use href="./assets/svg/sprite/wordCard.svg#volume"></use>
          </svg>
          <audio className="audio-word" src={`${axios.defaults.baseURL}/${word.audio}`}>
            <audio className="audio-example" src={`${axios.defaults.baseURL}/${word.audioExample}`}>
              <audio className="audio-meaning" src={`${axios.defaults.baseURL}/${word.audioMeaning}`}>
              </audio>
            </audio>
          </audio>
        </button>
      </div>
    </div>
  )
}
export default WordCardHeader

