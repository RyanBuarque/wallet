import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.svg'

function Header() {
  return (
    <header>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://klever.finance/"
    >
      <Img src={logo} />
    </a>
  </header>
  )
}

const Img = styled.img`
  width: 200px;
  height: 300px;
`

export default Header