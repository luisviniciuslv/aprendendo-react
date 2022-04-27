import './index.css'
import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'

// eslint-disable-next-line
export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Fragmento />
      <ComParametro
        titulo="Situação do Aluno"
        Aluno="João"
        Nota={8}
      />
      <Primeiro></Primeiro>
    </div>
  )
}
