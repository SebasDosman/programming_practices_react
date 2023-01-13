import './App.css'

import reactLogo from './assets/react.svg'

import Counter from './components/Counter'
import Icons from './components/Icons'

function App() {
  return (
    <div className="App">
      <Icons reactLogo={ reactLogo }/>

      <h1>Vite + React</h1>
      
      <div className="card">
        <Counter name='Contadorcito' counter={ 0 }/>
      </div>
    </div>
  )
}

export default App
