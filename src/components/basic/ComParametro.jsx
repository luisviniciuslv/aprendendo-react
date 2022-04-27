import React from 'react'



export default function ComParametro(props){

  //não é possivel alterar uma propriedade, mas pode se criar uma variavel
  //Exemplo  ||
  //         V
  const notaArredondada = Math.ceil(props.Nota)
  const status = notaArredondada >= 7 ? 'Aprovado' : 'Reprovado'

  return(
    <div>
      <h2>{ props.titulo }</h2>
      <p>
        <strong>{ props.Aluno } </strong>
        tem nota
      <strong> { props.Nota } </strong>
        e foi
        <strong> { status } </strong>
      </p>
    </div>
  )
}
