import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Secret } from '@/pages'

function RoutesIndex () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/secret' element={<Secret />} />
    </Routes>
  )
}

export default RoutesIndex
