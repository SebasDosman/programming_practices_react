import React from 'react';
import { useState, useLayoutEffect, useRef } from 'react';

import PropTypes from 'prop-types';

export const Blockquote = ({ author, content }) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ 
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const { width, height } =  pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, [content])

    return (
        <>
            <blockquote className='blockquote text-end' style={{ display: 'flex' }}>
                <p ref={ pRef } className='mb-1'>{content}</p>
                <footer className='blockquote-footer'>{author}</footer>
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
};

Blockquote.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Blockquote;
