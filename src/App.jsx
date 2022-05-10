import { BrowserRouter as Router } from 'react-router-dom'
import RoutesIndex from '@/routes'
import { Navbar } from '@/components/Navbar'
import AuthContextProvider from '@/context/AuthContext'
import './App.css'

function App () {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <RoutesIndex />
        </Router>
      </AuthContextProvider>
    </>
  )
}

export default App
