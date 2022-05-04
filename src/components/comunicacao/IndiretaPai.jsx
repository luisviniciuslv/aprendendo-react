import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    // nome idade nerd
    function fornecerInformações(nome, idade, nerd){
        nome = setNome(nome)
        idade = setIdade(idade)
        nerd = setNerd(nerd)
    }
    return(
        <div>
         <div>
             <span>{nome} </span>
             <span>{idade} </span>
             <span>{nerd ? 'É nerd' : 'Não é nerd'}</span>
         </div>
            <IndiretaFilho quandoClicar={fornecerInformações}/>
        </div>
    )
}