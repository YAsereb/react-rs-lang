import { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import WordsList from '../components/WordList/WordsList'
import WordsLevels from '../components/WordsLevels/WordsLevels'

const Textbook = () => {
  const [group, setGroup] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const COUNT_PAGES = 30;
  const WORDS_ON_PAGE = 20;

  return (
    <>
      <Header />
      <main className='main'>
        <WordsLevels
          group={group}
          setGroup={setGroup}
          setPage={setCurrentPage}
        />
        <WordsList
          group={group}
          page={currentPage}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalDataCount={COUNT_PAGES * WORDS_ON_PAGE}
          pageSize={WORDS_ON_PAGE}
          siblingCount={1}
        />
      </main>
      <Footer />
    </>
  )
}

export default Textbook
