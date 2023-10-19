import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        {/* Navigation Here */}
      </div>
      <div id="main-section">
        {/* Roots Here */}
      </div>
    </div>
    </>
  )
}

export default App
