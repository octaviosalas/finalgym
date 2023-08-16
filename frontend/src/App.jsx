import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './pages/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
         <Sidebar />
         <Main/>
      </div>
    </>
  )
}

export default App
