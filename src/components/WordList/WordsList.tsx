import { useEffect, useState } from 'react';
import WordAPI from '../../API/WordService';
import { IWord } from '../../types/word';
import WordCard from '../WordCard/WordCard';
import WordCardButtons from '../WordCard/WordCardButtons/WordCardButtons';
import WordCardHeader from '../WordCard/WordCardHeader/WordCardHeader';
import WordContent from '../WordCard/WordContent/WordContent';
import './WordsList.scss';

interface WordsListProps {
  group: number,
  page: number
}

const WordsList = ({ group, page }: WordsListProps) => {
  const [words, setWords] = useState<IWord[]>([]);
  // const [userWords, setUserWords] = useState<IWordCard[]>([]);
  const [isDisabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    const getWords = async () => {
      const response = await WordAPI.getAllWords(group, page);
      setWords(response);
    }
    getWords();
  }, [group, page]);

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
