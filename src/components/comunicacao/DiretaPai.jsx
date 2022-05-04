import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho nome="Luis" idade={20} nerd={true}/>
            <DiretaFilho nome="Rodrigo" idade={12} nerd={false}/>
        </div>
    )
}