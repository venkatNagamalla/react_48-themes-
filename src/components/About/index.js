import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => {
  const lightTheme = {
    aboutImg: 'https://assets.ccbp.in/frontend/react-js/about-light-img.png',
    aboutText: 'about-heading light-mode',
    bgColor: 'about-container bg-light-mode',
  }

  const darkTheme = {
    aboutImg: 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png',
    aboutText: 'about-heading dark-mode',
    bgColor: 'about-container bg-dark-mode',
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const themeDetails = isDarkTheme ? darkTheme : lightTheme

        const {aboutImg, aboutText, bgColor} = themeDetails

        return (
          <>
            <Navbar />
            <div className={bgColor}>
              <img className="about-img" src={aboutImg} alt="about" />
              <h1 className={aboutText}>About</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default About
