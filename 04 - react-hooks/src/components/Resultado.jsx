import React from 'react';

const Resultado = ({ string, resultado }) => {
    return (
        <>
            <span>{ string }: { resultado }</span>
            <br/>
        </>
    )
};

export default Resultado;
