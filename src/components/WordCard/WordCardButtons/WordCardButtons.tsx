import svg from '../../../assets/svg/wordCard.svg';
import { IWord } from '../../../types/word';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';

interface WordCardHeaderProps {
  word: IWord
}

const WordCardButtons = ({ word }: WordCardHeaderProps) => {
  const { isLogin } = useContext(AuthContext);

  return (
    <>
      {isLogin &&
        <div className="buttons-block">
          <button className={
            word.userWord?.difficulty === 'hard' ? 'back-word__btn' : 'add-word__btn'
          }>
            <svg>
              <use
                href={`${svg}#${word.userWord?.difficulty === 'hard' ? 'minus' : 'add'}`}
              >
              </use>
            </svg>
          </button>
          {!word.userWord?.optional?.isLearned &&
            <button className='remove-word__btn'>
              <svg>
                <use
                  href={`${svg}#delete`}>
                </use>
              </svg>
            </button>}
        </div>}
    </>
  )
}

export default WordCardButtons
