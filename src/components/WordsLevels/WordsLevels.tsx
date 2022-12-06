import React from 'react'
import './style.scss'

const WordsLevels = () => {
  return (
    <>
      <div className="levels-list">
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