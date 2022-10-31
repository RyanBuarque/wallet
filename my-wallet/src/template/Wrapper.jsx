import React from 'react'
import styled from 'styled-components'

import Header from './/Header'
import star from '../assets/shooting-star.svg'
import Button from '../components/Button'

function Wrapper(props) {
  const { children } = props
  return (
    <>
      <Header />
      <Main>
        <HeaderMain>
          <h1>
            <StarImg src={star} /> Wish Wallet
          </h1>
          <Button primary="true" text="Add Token" to="/add"/>
        </HeaderMain>
        {children}
        {/* <Table /> */}
        {/* <Add text="Edit Token" /> */}
      </Main>
    </>
  )
}

const Main = styled.div`
  max-width: 450px;
  margin: 0 auto;
`

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const StarImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`

export default Wrapper
