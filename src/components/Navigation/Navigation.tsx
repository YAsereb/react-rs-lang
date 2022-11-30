import React from 'react'
import { Link } from 'react-router-dom';
import icon from '../../assets/icon/home-page-icon.png';


const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <img src={icon} alt="home-page-icon" />
      </Link>
      <Link to="/textbook">
        Textbook
      </Link>
      <Link to="/games">
        Games
      </Link>
      <Link to="/statistic">
        Statistic
      </Link>
    </nav>
  )
}

export default Navigation
