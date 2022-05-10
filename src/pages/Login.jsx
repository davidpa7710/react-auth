import axios from 'axios'
import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import '@/assets/css/form.css'
import logo from '@/logo.png'


const Login = () => {

  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const sendData = (data) => {
    axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', data)
      .then((response) => {
        console.log(response.data);

        loginUser(response.data.token)
        navigate('/')
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })



  return (
    <div>
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password</label>
          </div>



          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                value="remember-me"
              /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </main>
    </div>
  )
}

export default Login
