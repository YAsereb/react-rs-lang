import React from 'react'
import './WordLevels.scss'

interface WordsLevelsProps {
  group: number,
  setGroup: React.Dispatch<React.SetStateAction<number>>,
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const WordsLevels = ({ setGroup, setPage }: WordsLevelsProps) => {

  const getWordsLevel = (e: React.MouseEvent) => {
    const node = e.target as HTMLElement;
    const parentNode = node.parentNode as HTMLElement;
    let currentGroup;
    if (node.hasAttribute('data-group')) {
      currentGroup = Number(node.getAttribute('data-group'));
      setGroup(currentGroup);
    }
    if (parentNode.hasAttribute('data-group')) {
      currentGroup = Number(parentNode.getAttribute('data-group'));
      setGroup(currentGroup);
    }
    setPage(0);
  }

  return (
    <>
      <div className="levels-list" onClick={getWordsLevel}>
        <div className="level-card" data-group="0">
          <div className="level-card__left">Easy</div>
          <div className="level-card__right">A1</div>
          <div className="circle"></div>
        </div>
        <div className="level-card" data-group="1">
          <div className="level-card__left">Easy</div>
          <div className="level-card__right">A2</div>
          <div className="circle"></div>
        </div>
        <div className="level-card" data-group="2">
          <div className="level-card__left">Medium</div>
          <div className="level-card__right">B1</div>
          <div className="circle"></div>
        </div>
        <div className="level-card" data-group="3">
          <div className="level-card__left">Medium</div>
          <div className="level-card__right">B2</div>
          <div className="circle"></div>
        </div>
        <div className="level-card" data-group="4">
          <div className="level-card__left">Hard</div>
          <div className="level-card__right">C1</div>
          <div className="circle"></div>
        </div>
        <div className="level-card" data-group="5">
          <div className="level-card__left" >Hard</div>
          <div className="level-card__right">C2</div>
          <div className="circle"></div>
        </div>
      </div>
    </>

  )
}

export default WordsLevels