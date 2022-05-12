import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Secret = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <h1>Secret</h1>
      { user.role === 'ADMIN'
        ?  <><h2>Hola Admin</h2> <img src='https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png' /></>
        : <><h2>Hola Usuario</h2> <img src='https://www.gifss.com/comics/ironman/images/gif-ironman-4.gif' /></>}
      {user.role === 'CUSTOMER' && <h4>Bienvenido Seas Cliente</h4>}  
      {user.role === 'ADMIN' && <h4>Bienvenido Seas Admin</h4> }  
    </div>
  )
}

export default Secret
