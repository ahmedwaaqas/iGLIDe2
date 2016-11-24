import React from 'react'
import styled from 'styled-components'

import { Heading, Input, Label, Button } from 'components'

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom:36px;
`

const StyledInput = styled(Input)`
  text-align: left;
  padding:12px
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  margin-bottom: 24px;
`

const StyledLabel = styled(Label)`
  text-align: left;
  margin-top:12px;
`

const StyledButton = styled(Button)`
  text-align: right;
  float:right;
  background-color:#14a248;
  border-radius:5px;
`

const StyleDiv = styled.div`
  padding:24px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  max-width: 420px;
  background-color:white;
  height:400px;

`

const LoginBox = ({ props }) => {
  return (
    <StyleDiv {...props}>
     <StyledHeading>Log into your account</StyledHeading>
     <StyledLabel>Username</StyledLabel>
     <StyledInput></StyledInput>
     <StyledLabel>Password</StyledLabel>
     <StyledInput type="password"></StyledInput>
     <StyledInput type="Checkbox"></StyledInput>
     <StyledLabel  >Remember me</StyledLabel>
     <StyledButton to="/sample-page">Login</StyledButton>
    </StyleDiv>
  )
}

export default LoginBox
