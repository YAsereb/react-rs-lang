import { useContext, useEffect, useState } from 'react';
import WordAPI from '../../API/WordService';
import { AuthContext } from '../../context/context';
import { IWordCard } from '../../types/word';
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
  const [words, setWords] = useState<IWordCard[]>([]);
  const [isDisabledButton, setDisabledButton] = useState(false);
  const { isLogin } = useContext(AuthContext);

  useEffect(() => {
    const getWords = async () => {
      let response;
      if (isLogin) {
        const userId = localStorage.getItem('userId') as string;
        const token = localStorage.getItem('token') as string;
        const filter = JSON.stringify({
          $and: [
            { page: page - 1 },
            { group: group }
          ]
        })
        response = await WordAPI.getAggregatedWords(userId, filter, 20, token);
      } else {
        response = await WordAPI.getAllWords(group, page);
      }
      setWords(response);
    }
    getWords();
  }, [group, page, isLogin]);

  return (
    <div className='words-list'>
      {words.map(word =>
        <WordCard key={word.id || word._id}>
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
