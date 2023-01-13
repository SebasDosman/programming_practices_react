import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { CounterApp, CounterCustomHooks, SimpleForm, FormCustomHook, MultipleCustomHooks, FocusScreen, Layout, Memorize, MemoHook, CallbackHook, Padre, NavBar, HooksApp, UserProvider } from '../'; 

export const MainApp = () => {
    return (
        <UserProvider className='container text-center'>
            <h1>Main - App</h1>
            
            <hr />

            <NavBar />

            <hr />

            <Routes>
                <Route path='/' element={ <></> } />
                <Route path='/hooks-app' element={ <HooksApp></HooksApp> } />
                <Route path='/counter-app' element={ <CounterApp/> } />
                <Route path='/counter-custom-hooks' element={ <CounterCustomHooks/> } />
                <Route path='/simple-form' element={ <SimpleForm/> } />
                <Route path='/form-custom-hook' element={ <FormCustomHook/> } />
                <Route path='/multiple-custom-hooks' element={ <MultipleCustomHooks/> } />
                <Route path='/focus-screen' element={ <FocusScreen/> } />
                <Route path='/layout' element={ <Layout/> } />
                <Route path='/memorize' element={ <Memorize/> } />
                <Route path='/memo-hook' element={ <MemoHook/> } />
                <Route path='/callback-hook' element={ <CallbackHook/> } />
                <Route path='/padre' element={ <Padre/> } />
                <Route path='/*' element={ <Navigate to={ '/' }/> } />
            </Routes>
        </UserProvider>
    )
};

export default MainApp;
