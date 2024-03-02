import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

// Write your code here

const Home = () => {
  const lightTheme = {
    homeImg: 'https://assets.ccbp.in/frontend/react-js/home-light-img.png',
    homeText: 'home-heading light-mode',
    bgColor: 'home-container bg-light-mode',
  }

  const darkTheme = {
    homeImg: 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png',
    homeText: 'home-heading dark-mode',
    bgColor: 'home-container bg-dark-mode',
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const themeDetails = isDarkTheme ? darkTheme : lightTheme

        const {homeImg, homeText, bgColor} = themeDetails

        return (
          <>
            <Navbar />
            <div className={bgColor}>
              <img className="home-img" src={homeImg} alt="home" />
              <h1 className={homeText}>Home</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home
