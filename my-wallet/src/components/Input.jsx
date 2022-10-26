import React from 'react'
import styled from 'styled-components'

function Input(props) {
  return (
    <Div>
        <label>{props.text}</label>
        <input type={props.type} />
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto;

    label {
        text-align: start;
        font-size: 0.8em;
        margin-bottom: 5px;
    }

    input {
        padding: 8px;
        border-radius: 5px;
        border: none;
    }
  }
`

export default Input