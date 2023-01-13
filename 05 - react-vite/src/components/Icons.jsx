import React from 'react'

import PropTypes from 'prop-types'

const Icons = ({ reactLogo }) => {
    return (
        <>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            
            <a href="https://reactjs.org" target="_blank">
                <img src={ reactLogo } className="logo react" alt="React logo" />
            </a>
        </>
    )
}

Icons.protTypes = {
    reactLogo: PropTypes.string.isRequired
}

export default Icons
