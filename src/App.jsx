import { useState } from 'react'
import viteLogo from '/bticon.svg'
import './App.css'
import Home from './pages/Home'
import AppRouter from './routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRouter />
  )
}

export default App
