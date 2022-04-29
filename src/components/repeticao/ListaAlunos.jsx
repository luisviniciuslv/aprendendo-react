import React from 'react'
import alunos from '../../data/alunos'
export default props => {

  const liS = alunos.map(aluno => {
    return (
    <li>
      {aluno.id}
    </li>
  )}

  return(
    <div>
      <ul>
        <li>Ana - 3.7</li>
        <li>Carlito - 7.7</li>
        <li>MADREMIA - 10.0</li>
      </ul>
    </div>
  )
