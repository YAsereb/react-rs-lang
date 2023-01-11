import { IWord, IWordCard } from '../../types/word';
import './HeaderWordCard.scss';
import volumeSVG from '../../assets/svg/wordCard.svg'
import { useRef, useEffect, useState, useMemo } from 'react';

const PATH_TO_FILE = 'https://react-rs-lang-be.onrender.com'

interface WordCardHeaderProps {
  word: IWordCard | IWord,
  isDisabledButton: boolean,
  setDisabledButton: React.Dispatch<React.SetStateAction<boolean>>
}

const WordCardHeader = ({ word, isDisabledButton, setDisabledButton }: WordCardHeaderProps) => {
  const [isAudioPlay, setIsAudioPlay] = useState(false);

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
      audio[1].play();
    })
    audio[1].addEventListener('ended', () => audio[2].play());
    audio[2].addEventListener('ended', () => {
      setDisabledButton(false);
      setIsAudioPlay(false);
    })
  }, [audio])

  function playAudio() {
    setDisabledButton(true);
    audio[0].play();
    setIsAudioPlay(true);
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
          disabled={isDisabledButton}
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

