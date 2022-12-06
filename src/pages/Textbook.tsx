import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import WordCardList from '../components/WordCardList'
import WordsLevels from '../components/WordsLevels/WordsLevels'

const Textbook = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <WordsLevels />
        <WordCardList />
      </main>
      <Footer />
    </>
  )
}

export default Textbook
