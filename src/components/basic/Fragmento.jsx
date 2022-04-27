import React from 'react'

export default function Fragmento(props){
  /*COMPONENTES NÃO ENVOLVIDOS EM TAGS
  SÃO CONSIDERADOS FRAGMENTOS, E NÃO
  PODEM SER RENDERIZADOS
  PARA ISSO PODEMOS ENVOLVER COM
  <React.Fragment> </React.Fragment>
 PARA ADICIONAR PROPRIEDADES
  OU COM ABREVIAÇÃO <> </>*/

  return(
    <>
  <h2>Isso é um fragmento</h2>
  <p>Cuidado com esse erro!</p>
    </>
  )
}
