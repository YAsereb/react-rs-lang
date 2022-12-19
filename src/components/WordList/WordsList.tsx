import { useEffect, useState } from 'react';
import WordAPI from '../../API/WordService';
import { IWord, IWordCard } from '../../types/word';
import WordCard from '../WordCard/WordCard';
import './WordsList.scss'

const WordsList = () => {
  const [words, setWords] = useState<IWord[]>([]);
  const [userWords, setUserWords] = useState<IWordCard[]>([]);

  const getWords = async () => {
    const response = await WordAPI.getAllWords(0, 0);
    setWords(response);
  }

  // const getAllUserWords = async (id: string) => {
  //   const response = await WordAPI.getAllUserWords()
  // }

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
