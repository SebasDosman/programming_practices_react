import React from 'react';
import { useState, useEffect } from 'react';

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            setCoords({x, y});
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove); 
        };
    }, [ ]);

    return (
        <div className='container text-center'>
            <h3>User does exist</h3>

            <p>{ JSON.stringify(coords) }</p>
        </div>
    )
};

export default Message;
