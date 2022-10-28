import React from 'react'
import styled from 'styled-components'

function Button(props) {
  return <A type="button" primary={props.primary} danger={props.danger}>{props.text}</A>
}

const A = styled.button`
  background: ${(props) => (props.primary ? '#aa33b5' : props.danger ? '#920000' : '#646464')};
  color: white;
  padding: 7px 12px;
  border-radius: 5px;
  border: none;
`

export default Button
