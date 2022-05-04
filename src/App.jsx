import './App.css'
import { NavBar } from '@/components/NavBar'
import { Home, Login, SignUp, Secret } from '@/pages'


function App() {


  return (
    <>
      <NavBar />
      <h1>App</h1>
      <Home />
      <Login />
      <SignUp />
      <Secret />
    </>
  )
}

export default App
