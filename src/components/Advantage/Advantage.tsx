import React from 'react'
import { IAdvantage } from '../../ourAdvantages'



const Advantage = (advantage: IAdvantage) => {
  return (
    <div className="advantages-item">
      <p className="advantage-name">{advantage.name}</p>
      <img src={advantage.imgSrc} className="advantages-img" alt={advantage.imgAlt} />
      <p className="advantage-description">{advantage.description}</p>
    </div>
  )
}

export default Advantage

