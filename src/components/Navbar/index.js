// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => {
  const lightTheme = {
    themeImg:
      'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png',
    themeLogo: 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png',
    navColor: 'nav-icon light-mode',
    bgColor: 'nav-container bg-light-mode',
  }

  const darkTheme = {
    themeImg:
      'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png',
    themeLogo: 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
    navColor: 'nav-icon dark-mode',
    bgColor: 'nav-container bg-dark-mode',
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const themeDetails = isDarkTheme ? darkTheme : lightTheme
        const {themeImg, themeLogo, navColor, bgColor} = themeDetails

        const onChangeTheme = () => {
          toggleTheme()
        }

        return (
          <>
            <nav className={bgColor}>
              <Link className="link" to="/">
                <img
                  className="website-logo"
                  src={themeImg}
                  alt="website logo"
                />
              </Link>
              <ul className="nav-icons-container">
                <Link className="link" to="/">
                  <li className={navColor}>Home</li>
                </Link>

                <Link className="link" to="/about">
                  <li className={navColor}>About</li>
                </Link>
              </ul>
              <button
                data-testid="theme"
                className="theme-btn"
                onClick={onChangeTheme}
                type="button"
              >
                <img className="theme" src={themeLogo} alt="theme" />
              </button>
            </nav>
            <hr />
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar
