import { useEffect, useState } from 'react';
import WordAPI from '../../API/WordService';
import { IWord } from '../../types/word';
import WordCard from '../WordCard/WordCard';
import WordCardButtons from '../WordCard/WordCardButtons/WordCardButtons';
import WordCardHeader from '../WordCard/WordCardHeader/WordCardHeader';
import WordContent from '../WordCard/WordContent/WordContent';
import './WordsList.scss';

const WordsList = () => {
  const [words, setWords] = useState<IWord[]>([]);
  // const [userWords, setUserWords] = useState<IWordCard[]>([]);
  const [isDisabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    const getWords = async () => {
      const response = await WordAPI.getAllWords(0, 0);
      setWords(response);
    }
    getWords();
  }, []);

  return (
    <div className='words-list'>
      {words.map(word =>
        <WordCard key={word.id}>
          <WordCardHeader
            word={word}
            isDisabledButton={isDisabledButton}
            setDisabledButton={setDisabledButton}
          />
          <WordCardButtons word={word} />
          <WordContent
            word={word}
          />
        </WordCard>)}
    </div>
  )
}

export default WordsList
