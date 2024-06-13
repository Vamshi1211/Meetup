import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1100px;
  margin: auto;
  height: 80vh;
`

export const RegisterImage = styled.img`
  width: 40%;
  max-width: 350px;
`

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`

export const FormHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 42px;
  color: #475569;
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 4px;
`

export const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabelText = styled.label`
  font-family: 'Roboto';
  font-weight: 600;
  color: #64748b;
  margin-bottom: 10px;
  font-size: 14px;
`

export const NameInput = styled.input`
  padding: 8px 15px 8px 15px;
  outline: none;
  width: 100%;
  font-family: 'Roboto';
`

export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const SelectContainer = styled.select`
  font-family: 'Roboto';
  padding: 8px 15px 8px 15px;
  outline: none;
  cursor: pointer;
  color: #475569;
  font-weight: 500;
`

export const Options = styled.option`
  font-family: 'Roboto';
  color: #64748b;
  font-weight: 400;
`
export const FormRegisterButton = styled.button`
  padding: 8px 32px 8px 32px;
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
  background-color: #3b82f6;
  align-self: flex-start;
  margin-top: 30px;
  border-radius: 8px;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #ff0b37;
`
