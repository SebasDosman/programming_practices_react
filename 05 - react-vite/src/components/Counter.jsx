import React from 'react'
import { useState } from 'react'

import PropTypes from 'prop-types'

const Counter = ({ name, counter }) => {
    const [count, setCount] = useState(counter)

    const handleClickUp = () => setCount(count + 1)
    const handleClickDown = () => setCount(count - 1)
    const handleClickReset = () => setCount(counter)

    return (
        <>
            <span>Count with name { name } is { count }</span>
            
            <br/>
            
            <button onClick={ handleClickUp }>Up</button>
            <button onClick={ handleClickDown }>Down</button>
            <button onClick={ handleClickReset }>Reset</button>
        </>
    )
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default Counter
