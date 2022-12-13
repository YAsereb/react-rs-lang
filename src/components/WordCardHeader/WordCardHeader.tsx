import { IWord, IWordCard } from '../../types/word';
import './HeaderWordCard.scss';
import volumeSVG from '../../assets/svg/wordCard.svg'

const PATH_TO_FILE = 'https://react-rs-lang-be.onrender.com'

interface WordCardHeaderProps {
  word: IWordCard | IWord
}

const WordCardHeader = ({ word }: WordCardHeaderProps) => {
  const playAudio = () => {

  }

  return (
    <div className="card-header__block">
      <h3>{word.word} </h3>
      <div className="card-header__info">
        <div>{word.wordTranslate} </div>
        <div> {word.transcription} </div>
        <button className="sound-word__btn">
          <svg>
            <use href={`${volumeSVG}#volume`} ></use>
          </svg>
          <audio className="audio-word" src={`${PATH_TO_FILE}/${word.audio}`}>
            <audio className="audio-example" src={`${PATH_TO_FILE}/${word.audioExample}`}>
              <audio className="audio-meaning" src={`${PATH_TO_FILE}/${word.audioMeaning}`}>
              </audio>
            </audio>
          </audio>
        </button>
      </div>
    </div >
  )
}
export default WordCardHeader

