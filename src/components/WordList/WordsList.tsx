import { useEffect, useState } from 'react';
import WordAPI from '../../API/WordService';
import { IWord } from '../../types/word';
import WordCard from '../WordCard/WordCard';
import './WordsList.scss'

const WordsList = () => {
  const [words, setWords] = useState<IWord[]>([]);

  const getWords = async () => {
    const response = await WordAPI.getAllWords(0, 0);
    setWords(response);
  }

  useEffect(() => {
    getWords();
  }, [])

  return (
    <div className='words-list'>
      {words.map(word => <WordCard word={word} key={word.id} />)}
    </div>
  )
}

export default WordsList
