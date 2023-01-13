import { React } from 'react';

import { useState } from 'react';

import Resultado from './Resultado';

import { operaciones } from '../helpers/operaciones';

const NumberInput = () => {
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0
    });

    const { handleChange, suma, resta, multiplicacion, division, numero1, numero2 } = operaciones(numeros, setNumeros);

    return (
        <>
            <label>Número 1: <input className='input' name='numero1' value={ numero1 } onChange={ handleChange } type="number" /></label>
            <br/>
            
            <label>Número 2: <input className='input' name='numero2' value={ numero2 } onChange={ handleChange } type="number" /></label>
            <br/>
            <br/>

            <Resultado string="Suma" resultado={ suma() }/>
            <br/>

            <Resultado string="Resta" resultado={ resta() }/>
            <br/>
            
            <Resultado string="Multiplicación" resultado={ multiplicacion() }/>
            <br/>
            
            <Resultado string="División" resultado={ division() }/>
            <br/>
        </>
    )
};

export default NumberInput;
