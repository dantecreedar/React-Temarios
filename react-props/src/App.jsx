import { useState } from 'react'
import reactLogo from './assets/react.svg'
import image1 from './assets/props_1.png'
import image2 from './assets/props_2.png'
import './App.css'
import Component from './components/props'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Props</h1>
      <div className="card">
        <Component
           data1 = "Valor 1-"
           data2 = "Valor 2-"
           data3 = "Valor 3"
        />
        <img src={image1} className="image react" alt="React logo" />
        <img src={image2} className="image react" alt="React logo" />
      </div>
      <p className="read-the-docs">
        React Props
      </p>
    </div>
  )
}

export default App
