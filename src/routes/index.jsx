import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Secret, LogOut } from '@/pages'
import { useContext } from 'react'
import Protected from '../hoc/Protected'
import { AuthContext } from '../context/AuthContext'

function RoutesIndex() {
  const { isAuth } = useContext(AuthContext)


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route
        path='/secret'
        element={
          <Protected isLoggedIn={isAuth}>

            <Secret />
          </Protected>
        }
      />
      <Route path='/logout' element={<LogOut />} />
    </Routes>
  )
}

export default RoutesIndex
