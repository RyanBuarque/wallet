import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import Input from './Input'

function Add(props) {
  return (
    <Div>
      <div>
        <legend>{props.text}</legend>
        <Button text="Voltar" />
      </div>
      <Input text="Token" type="text" />
      <Input text="Balance" type="number" />
      <div>
        <Button text="Remover" />
        <Button text="Salvar" />
      </div>
    </Div>
  )
}

const Div = styled.div`
  margin: 50px 0 0 50px;

  div:first-child,
  div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px auto;
  }
`

export default Add
