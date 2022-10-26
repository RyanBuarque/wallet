import styled from 'styled-components'

import Button from './components/Button'
import Table from './components/Table'
import Add from './components/Add'

import logo from './assets/logo.svg'
import star from './assets/shooting-star.svg'

function App() {
  return (
    <div className="App">
      <header>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://klever.finance/"
        >
          <Img src={logo} />
        </a>
      </header>
      <Main>
        <HeaderMain>
          <h1>
            <StarImg src={star} /> Wish Wallet
          </h1>
          <Button text="Add Token" />
        </HeaderMain>
        {/* <Table /> */}
        <Add text="Edit Token"/>
      </Main>
    </div>
  )
}

const Img = styled.img`
  width: 200px;
  height: 300px;
`

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

export default App
