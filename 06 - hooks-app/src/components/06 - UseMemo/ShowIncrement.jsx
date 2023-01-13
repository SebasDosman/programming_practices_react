import React from 'react';

import { PropTypes } from 'prop-types';

export const ShowIncrement = ({ increment }) => {
    console.log('Me volví a generar :(');

    return (
        <button className='btn btn-primary btn-lg' onClick={ () => increment() }>
            Increment
        </button>
    )
};

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
};

export default ShowIncrement;
