import reactLogo from './assets/react.svg';

import './App.css';

import Cards from './components/Cards';
import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <React.Fragment>
        <Cards/>
        { /* <Contador/> */ }
      </React.Fragment>
    </div>
  )
}

export default App
