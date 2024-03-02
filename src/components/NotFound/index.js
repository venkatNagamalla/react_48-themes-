// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => {
  console.log('L')

  const lightTheme = {
    notFoundHeading: 'not-found-heading light-mode',
    notFoundText: 'not-found-text light-mode',
    bgColor: 'not-found-container bg-light-mode',
  }

  const darkTheme = {
    notFoundHeading: 'not-found-heading dark-mode',
    notFoundText: 'not-found-text dark-mode',
    bgColor: 'not-found-container bg-dark-mode',
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const themeDetails = isDarkTheme ? darkTheme : lightTheme

        const {notFoundHeading, notFoundText, bgColor} = themeDetails

        return (
          <>
            <Navbar />
            <div className={bgColor}>
              <img
                className="not-found-img"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className={notFoundHeading}>Lost Your Way?</h1>
              <p className={notFoundText}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default NotFound
