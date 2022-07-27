import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import reactImage from './assets/components.png'
import reactImage2 from './assets/components_2.png'
import './App.css'

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
      <h1>React Components</h1>
      <div className="card">
        <img src={reactImage} className="Image react" alt="React Image" />
        <img src={reactImage2} className="Image2 react" alt="React Image" />
      </div>
      <p className="read-the-docs">
        Componentes React Estructura Basica
      </p>
    </div>
  )
}

export default App
