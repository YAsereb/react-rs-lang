import './WordCard.scss';

interface WordCardProps {
  children: JSX.Element | JSX.Element[]
}

const WordCard = ({ children }: WordCardProps) => {

  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default WordCard