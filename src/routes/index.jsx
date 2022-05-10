import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Signup, Secret } from '@/pages'

const LogOut = () => {
  window.localStorage.removeItem('token')
  return(
    <Navigate to='/login' />
  )
}

function RoutesIndex () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/logout' element={<LogOut />} />
    </Routes>
  )
}

export default RoutesIndex
