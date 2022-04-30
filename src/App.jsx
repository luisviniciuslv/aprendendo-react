import React from 'react'

import './App.css'
import Aleatorio from './components/basic/Aleatorio'
import Card from './components/layout/Card'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'
import Primeiro from './components/basic/Primeiro'
import Familia from './components/basic/Familia'
import FamiliaMembro from './components/basic/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

// eslint-disable-next-line
export default () => {
  return (
    <div className="App">

      <h1>Fundamentos React</h1>

      <div className="Cards">

      <Card titulo="#07 - Repetição tabela de produtos" color="#005bBb">
          <TabelaProdutos/>
        </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
          <ListaAlunos/>
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Pereira">
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Josivalda"/>
            <FamiliaMembro nome="Rodriano"/>
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={10} max={65} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Paramerto" color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            Aluno="João"
            Nota={8}
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente " color="#588C73">
          <Primeiro></Primeiro>
        </Card>

      </div>

    </div>
  )
}
