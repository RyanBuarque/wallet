import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Wrapper from './template/Wrapper'
import Table from './components/Table'
import Add from './components/Add'

function Rotas() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Wrapper>
            <Table />
          </Wrapper>
        }
      />
      <Route
        path="*"
        element={
          <Wrapper>
            <Table />
          </Wrapper>
        }
      />
      <Route
        exact
        path="/add"
        element={
          <Wrapper>
            <Add />
          </Wrapper>
        }
      />
      <Route
        exact
        path="/edit"
        element={
          <Wrapper>
            <Add />
          </Wrapper>
        }
      />
    </Routes>
  )
}

export default Rotas
