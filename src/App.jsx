import { BrowserRouter as Router } from 'react-router-dom'
import RoutesIndex from '@/routes'
import { Navbar } from '@/components/Navbar'
import './App.css'

function App () {
  return (
    <div>
      <Router>
        <Navbar />
        <RoutesIndex />
      </Router>
    </div>
  )
}

export default App
