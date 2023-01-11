import { useEffect, useState } from 'react';
import WordAPI from '../../API/WordService';
import { IWord, IWordCard } from '../../types/word';
import WordCard from '../WordCard/WordCard';
import './WordsList.scss'

const WordsList = () => {
  const [words, setWords] = useState<IWord[]>([]);
  const [userWords, setUserWords] = useState<IWordCard[]>([]);
  const [isDisabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    const getWords = async () => {
      const response = await WordAPI.getAllWords(0, 0);
      setWords(response);
    }
    getWords();
  }, [])

  return (
    <div className='words-list'>
      {words.map(word =>
        <WordCard
          word={word}
          key={word.id}
          isDisabledButton={isDisabledButton}
          setDisabledButton={setDisabledButton}
        />)}
    </div>
  )
}

export default WordsList
