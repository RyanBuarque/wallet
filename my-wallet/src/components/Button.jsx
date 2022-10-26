import React from 'react'
import styled from 'styled-components'

function Button(props) {
  return (
    <A type='button'>{props.text}</A>
  )
}

const A = styled.button`
    background-color: #aa33b5;
    color: white;
    padding: 7px 12px;
    border-radius: 5px;
    border: none;
`

export default Button