import { NavBar } from './components/index.js'
import { Home } from './pages/index.js'

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App