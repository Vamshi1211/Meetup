import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import RegisterContext from './context/RegisterContext'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

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

// Replace your code here
class App extends Component {
  state = {
    nameInput: '',
    selectValue: topicsList[0].id,
    isError: false,
    errMsg: '',
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({selectValue: event.target.value})
  }

  errorOccured = () => {
    this.setState({isError: true, errMsg: 'Please enter your name'})
  }

  render() {
    const {nameInput, selectValue, isError, errMsg} = this.state
    console.log(selectValue)

    return (
      <RegisterContext.Provider
        value={{
          nameInput,
          selectValue,
          isError,
          errMsg,
          onChangeName: this.onChangeName,
          onChangeSelect: this.onChangeSelect,
          errorOccured: this.errorOccured,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
