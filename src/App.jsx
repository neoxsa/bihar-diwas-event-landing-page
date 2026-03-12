import React from 'react'
import { NavBar } from './components/index.js'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App