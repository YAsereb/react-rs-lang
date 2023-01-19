import { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import WordsList from '../components/WordList/WordsList'
import WordsLevels from '../components/WordsLevels/WordsLevels'

const Textbook = () => {
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);

  return (
    <>
      <Header />
      <main className='main'>
        <WordsLevels group={group} setGroup={setGroup} />
        <WordsList group={group} page={page} />
        <Pagination page={page} setPage={setPage} />
      </main>
      <Footer />
    </>
  )
}

export default Textbook
