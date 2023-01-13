import React from 'react';
import { memo } from 'react';

export const Small = memo(({ counter }) => {
    console.log('Me volví a llamar :(');

    return (
        <small>
            { counter }
        </small>
    )   
});

export default Small;
