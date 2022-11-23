import React from 'react'

interface IAdvantageProps {
  name: string,
  imgSrc: string,
  imgAlt: string,
  description: string
}

const Advantage = (props: IAdvantageProps) => {
  return (
    <div className="advantages-item">
      <p className="advantage-name">{props.name}</p>
      <img src={props.imgSrc} className="advantages-img" alt={props.imgAlt} />
      <p className="advantage-description">{props.description}</p>
    </div>
  )
}

export default Advantage

