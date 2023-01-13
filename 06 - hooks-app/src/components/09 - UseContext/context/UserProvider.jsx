import React from 'react';

import { UserContext } from './UserContext';

const user = {
    id: 123,
    name: 'Sebastián',
    email: 'sebastian@gmail.com'
};

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola : 'Mundo', user : user }}>
            { children }
        </UserContext.Provider>
    )
};

export default UserProvider;
