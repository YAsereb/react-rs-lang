import Advantage from '../../components/Advantage/Advantage'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Advantages } from '../../ourAdvantages'
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
            {
              Advantages.map(advantage =>
                <Advantage
                  key={advantage.name}
                  name={advantage.name}
                  imgSrc={require(`../../assets/img/${advantage.imgSrc}.png`)}
                  imgAlt={advantage.imgAlt}
                  description={advantage.description}
                />
              )
            }
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default MainPage