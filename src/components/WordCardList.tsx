import { useEffect, useState } from 'react';
import WordAPI from '../API/WordService';
import { IWord } from '../types/word';
import WordCard from './WordCard/WordCard';

const WordCardList = () => {
  const [words, setWords] = useState<IWord[]>([]);

  const getWords = async () => {
    const response = await WordAPI.getAllWords(0, 0);
    setWords(response);
  }


  useEffect(() => {
    getWords();
  }, [])


  return (
    <>
      {words.map(word => <WordCard word={word} key={word.id} />)}
    </>
  )
}

export default WordCardList
