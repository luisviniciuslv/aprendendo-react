import React, {useState} from 'react';
import './Input.css'
export default props => {

    const [valor, setValor] = useState('valor inicial')
    function quandoMudar(e){
        setValor(e.target.value)
    }
    return(
        <div className='Input'>
            <div>
                <h2>{valor}</h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <input value={valor} onChange={quandoMudar}/>
                    <input value={'valor inicial'} readOnly/>
                    <input value={undefined} />
                </div>
            </div>
        </div>
    )
}
