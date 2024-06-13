import Header from '../Header'
import WelcomePage from '../WelcomePage'
import {
  HomeContainer,
  MeetUpImage,
  HomeHeading,
  HomeDes,
} from './styledComponents'
import RegisterContext from '../../context/RegisterContext'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {nameInput, selectValue} = value

      return (
        <>
          <Header />
          <HomeContainer>
            {nameInput !== '' ? (
              <>
                <HomeHeading>Hello {nameInput}</HomeHeading>
                <HomeDes>Welcome to {selectValue}</HomeDes>
              </>
            ) : (
              <WelcomePage />
            )}
            <MeetUpImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
