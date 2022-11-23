import React from 'react'
import icon from '../../assets/icon/home-page-icon.png';
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <a href="/">
        <img src={icon} alt="home-page-icon" />
      </a>
      <a href="/textbook">
        Textbook
      </a>
      <a href="/games">
        Games
      </a>
      <a href="/statistic">
        Statistic
      </a>

    </header>
  )
}

export default Header
