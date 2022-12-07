import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import WordsList from '../components/WordList/WordsList'
import WordsLevels from '../components/WordsLevels/WordsLevels'

const Textbook = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <WordsLevels />
        <WordsList />
      </main>
      <Footer />
    </>
  )
}

export default Textbook
