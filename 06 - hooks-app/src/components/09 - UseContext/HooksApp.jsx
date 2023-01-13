import React from 'react';

import { useContext } from 'react';

import { UserContext } from './context/UserContext';

export const HooksApp = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Hooks - App</h1>

            <hr />

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>
        </div>
    )
};

export default HooksApp;
