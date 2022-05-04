import React from 'react'
const gerarIdade = () =>  parseInt(Math.random() * (20)) + 50
const gerarNerd = () => Math.random() > 0.5
export default props => {
    const cb = props.quandoClicar
    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={ _ => cb('Luis Paulo', gerarIdade, gerarNerd)}>
                Fornecer Informações</button>
        </div>
    )
}
