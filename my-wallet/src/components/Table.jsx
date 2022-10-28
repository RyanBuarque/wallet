import React from 'react'
import styled from 'styled-components'

import Token from './Token'

function Table() {
  return (
    <TB>
      <thead>
        <tr>
          <th>Tokens</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <Token text="klv" value="290,000.00" />
        <Token text="dvk" value="15,000.00" />
        <Token text="kfi" value="5" />
        <Token text="eth" value="0.005" />
      </tbody>
    </TB>
  )
}

const TB = styled.table`
  margin-top: 50px;
  width: 100%;

  tr {
    display: flex;
    justify-content: space-between;
  }

  thead {
    margin-bottom: 20px;
    th {
      font-size: 0.8em;
    }

    th:first-child {
      margin-left: 50px;
    }
  }

  th {
    font-size: 2em;
    margin-left: 20px;
  }
`

export default Table
