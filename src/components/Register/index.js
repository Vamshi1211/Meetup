import Header from '../Header'
import {
  RegisterContainer,
  RegisterImage,
  RegisterForm,
  FormHeading,
  NameInputContainer,
  InputLabelText,
  NameInput,
  TopicsContainer,
  SelectContainer,
  Options,
  FormRegisterButton,
  ErrorMessage,
} from './styledComponents'

import RegisterContext from '../../context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        nameInput,
        selectValue,
        onChangeName,
        onChangeSelect,
        errorOccured,
        isError,
        errMsg,
      } = value

      const onChangeInputText = event => {
        onChangeName(event)
      }

      const onChangeSelectText = event => {
        onChangeSelect(event)
      }

      const onFormSubmit = event => {
        event.preventDefault()
        const {history} = props

        if (nameInput !== '') {
          history.replace('/')
        } else {
          errorOccured()
        }
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <RegisterForm onSubmit={onFormSubmit}>
              <FormHeading>Let us join</FormHeading>
              <NameInputContainer>
                <InputLabelText htmlFor="inputId">NAME</InputLabelText>
                <NameInput
                  placeholder="Your name"
                  onChange={onChangeInputText}
                  value={nameInput}
                  id="inputId"
                />
              </NameInputContainer>
              <TopicsContainer>
                <InputLabelText htmlFor="selectId">TOPICS</InputLabelText>
                <SelectContainer
                  onChange={onChangeSelectText}
                  value={selectValue}
                >
                  {topicsList.map(eachItem => (
                    <Options key={eachItem.id} value={eachItem.id}>
                      {eachItem.displayText}
                    </Options>
                  ))}
                </SelectContainer>
              </TopicsContainer>
              <FormRegisterButton type="submit">
                Register Now
              </FormRegisterButton>
              {isError && <ErrorMessage>{errMsg}</ErrorMessage>}
            </RegisterForm>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
