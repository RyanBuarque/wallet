import React from 'react'
import styled from 'styled-components'

function Token(props) {
  return (
    <Tr>
      <Th>
        <a href="#">
          <i class="fa-solid fa-pen-to-square"></i>
        </a>
        {props.text}
      </Th>
      <th>{props.value}</th>
    </Tr>
  )
}

const Tr = styled.tr`
    margin: 15px 0;
`

const Th = styled.th`
  text-transform: uppercase;
  display: flex;
  align-items: center;

  a {
    color: white;
    font-size: 0.5em;
    margin-right: 15px;
  }
`

export default Token
