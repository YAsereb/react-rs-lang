import { IWord, IWordCard } from '../../types/word';
import './HeaderWordCard.scss';
import volumeSVG from '../../assets/svg/wordCard.svg'
import { useRef, useEffect, useState, useMemo } from 'react';

const PATH_TO_FILE = 'https://react-rs-lang-be.onrender.com'

interface WordCardHeaderProps {
  word: IWordCard | IWord
}

const WordCardHeader = ({ word }: WordCardHeaderProps) => {
  const [disabledButton, setDisabledButton] = useState(false);

  const soundButton = useRef<HTMLButtonElement>(null);

  const audio = useMemo(() => {
    return [
      new Audio(`${PATH_TO_FILE}/${word.audio}`),
      new Audio(`${PATH_TO_FILE}/${word.audioExample}`),
      new Audio(`${PATH_TO_FILE}/${word.audioMeaning}`)
    ]
  }, [word.audio, word.audioExample, word.audioMeaning])


  useEffect(() => {
    audio[0].addEventListener('ended', () => {
      setDisabledButton(true)
      audio[1].play();
    })
    audio[1].addEventListener('ended', () => audio[2].play());
    audio[2].addEventListener('ended', () => setDisabledButton(false));

  }, [audio])

  function playAudio() {
    audio[0].play();
  }

  return (
    <div className="card-header__block">
      <h3>{word.word}</h3>
      <div className="card-header__info">
        <div>{word.wordTranslate} </div>
        <div> {word.transcription} </div>
        <button
          className="sound-word__btn"
          onClick={playAudio}
          ref={soundButton}
          disabled={disabledButton}
        >
          <svg>
            <use href={`${volumeSVG}#volume`}></use>
          </svg>
        </button>
      </div>
    </div >
  )
}
export default WordCardHeader

