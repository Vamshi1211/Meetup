import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDes,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDes>
      We are sorry, the page you requested could not be found.
    </NotFoundDes>
  </NotFoundContainer>
)

export default NotFound
