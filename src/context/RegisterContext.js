import React from 'react'

const RegisterContext = React.createContext({
  nameInput: '',
  onChangeName: () => {},
  selectValue: '',
  onChangeSelect: () => {},
  isError: false,
  errMsg: '',
  errorOccured: () => {},
})

export default RegisterContext
