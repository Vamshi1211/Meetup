import {Link} from 'react-router-dom'
import {
  WelcomeHeading,
  WelcomeDes,
  HomeRegisterButton,
} from './styledComponents'

const WelcomePage = () => (
  <>
    <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
    <WelcomeDes>Please register for the topic</WelcomeDes>
    <Link to="/register">
      <HomeRegisterButton>Register</HomeRegisterButton>
    </Link>
  </>
)

export default WelcomePage
