import { useNavigate } from 'react-router'
import useForm from '@/hooks/useForm'
import '@/assets/css/form.css'
import logo from '@/logo.png'
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate()
  const sendData = (data) => {
    console.log(data);

    if(data.password === data.password_confirm){
      console.log('los password coiciden');
      delete data.password_confirm
      axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', data)
      .then((response) => {
        if(response.status === 200){
          console.log(response.status);
          navigate('/login')
        }
      }).catch((error) => {
        console.log(error.message)
      })
    } else{
      console.log('password no coinciden');
    }
  }
  const{input, handleInputChange, handleSubmit} = useForm(sendData, {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    password: '',
    password_confirm: ''
  })

  return (
    <div>
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

          <div className="form-floating">
            <input 
            type="text" 
            className="form-control" 
            id="first_name" 
            name="first_name"
            placeholder="Your First Name" 
            value={input.first_name}
            onChange={handleInputChange}
            />
            <label htmlFor="email">First Name</label>
          </div>

          <div className="form-floating">
            <input 
            type="text" 
            className="form-control" 
            id="last_name" 
            name="last_name"
            placeholder="Your Last Name" 
            value={input.last_name}
            onChange={handleInputChange}
            />
            <label htmlFor="email">Last Name</label>
          </div>

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
          
          <div className='form-floating my-1'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            required=''
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender' className='form-label'>Gender</label>
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

          <div className="form-floating">
            <input 
            type="password" 
            className="form-control" 
            id="password_confirm" 
            name="password_confirm"
            placeholder="Password" 
            value={input.password_confirm}
            onChange={handleInputChange}
            />
            <label htmlFor="password">Confirm Password</label>
          </div>

          <button className="w-100 my-3 btn btn-lg btn-primary" type="submit">Sign Up</button>
          <p className="mt-5 mb-3 text-muted">© 2020–2021</p>
        </form>
      </main>
    </div>
  )
}

export default Signup
