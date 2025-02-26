import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pokemon } from './components/Pokemon'

function App() {
  const [count, setCount] = useState('')

  const inputReF= useRef()

  return (
    <>
      <input ref={inputReF} type="text" />
      <button onClick={()=>{setCount(inputReF.current.value)}}>Buscar</button>
      <Pokemon pokemon={count} />
    </>
  )
}

export default App
