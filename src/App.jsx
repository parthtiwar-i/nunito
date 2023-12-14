import { useState } from 'react'
import Header from './header'
import Page from './page1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <div className="bg-[#1A1B23] min-h-[100vh] relative">
      <Header/>
      <Page/>
    </div>
    </>
  )
}

export default App
