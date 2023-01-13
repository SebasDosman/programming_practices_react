import React from 'react';
import { useState } from 'react';

const Contador = () => {
    const [ contador, setContador ] = useState(100)
  
    const sumar = () => {
        setContador(contador + 1);
    }
    
    const restar = () => {
        setContador(contador - 1);
    }

    return(
        <div className='Contador'>
            <button onClick={ restar }> Restar </button>
            <h1> { contador } </h1>
            <button onClick={ sumar }> Sumar </button>
        </div>
    );
}

export default Contador;