import React from 'react'
import Advantage from '../../components/Advantage/Advantage'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './main.scss'


const MainPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <article className="article">
          <div className="home-background-img">
            <p>Добро пожаловать в приложения  Rslang.<br /> Наше приложение поможет тебе в игровой форме выучить наиболее распространенные слова английского языка.</p>
          </div>
          <h2 className="article-header">Наши возможности</h2>
          <div className="wrapper">
            <Advantage
              name='Словарь'
              imgSrc='./assets/img/dictionary2.png'
              imgAlt='dictionary'
              description='Место, где ты можешь изучать новые слова, добавлять их в список для изучения'
            />
            <Advantage
              name='Игра спринт'
              imgSrc='./assets/img/sprint.png'
              imgAlt='sprint-game'
              description='Мини-игра, в который ты можешь испытать свои знания на время'
            />
            <Advantage
              name='Игра аудиовызов'
              imgSrc='./assets/img/audio-game4.png'
              imgAlt='audio-game'
              description='Мини-игра, в которой ты тренируешь свои аудио навыки'
            />
            <Advantage
              name='Статистика'
              imgSrc='./assets/img/statistics1.png'
              imgAlt='statistics'
              description='Здесь ты можешь увидеть свою статистику'
            />
          </div>
        </article>
        <article className="article">
          <h2 className="article-header">Наша команда</h2>
          <div className="wrapper">
            <div className="developer-card">
              <h3 className="developer-name">Yaroslav Serebrenikov</h3>
              <img src="./assets/img/proger1.png" className="developer-img" alt="developer_YAsereb" />
              <p className="developer-description">Team Lead frontend developer <br />Разработал Аудио игру,список слов,учебник.Координировал команду.</p>
            </div>
            <div className="developer-card">
              <h3 className="developer-name">Usevalad Kunski</h3>
              <img src="./assets/img/proger2.png" className="developer-img" alt="developer_SEvk4a" />
              <p className="developer-description" >Team Full stack developer <br />Развернул сервер,разработал авторизацию пользователей и роутинг.Разработал игру спринт.Участвовал в разработке статистики и дизайна.</p>
            </div>
            <div className="developer-card">
              <h3 className="developer-name">Yauhen Makarevich</h3>
              <img src="./assets/img/proger3.png" className="developer-img" alt="developer_zhentosmak" />
              <p className="developer-description">Frontend developer <br /> Сделал дизайн и верстку главной страницы. Участвовал в разработке игры Спринт. </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default MainPage