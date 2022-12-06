import { useState } from 'react'
import { IWord } from '../types/word'

const useWords = () => {
  const [words, setWords] = useState<IWord[]>([])


  return [words]
}

export default useWords
