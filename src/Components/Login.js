import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { logIn, googleSignIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await logIn(email, password)
      navigate("/home")
    }
    catch (error) {
      setError(error.message)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn()
      navigate("/home")
    }
    catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="login_form_div">
        <h2>
          <img src="/images/instagramLogo.png" />
        </h2>
        <div className='login_form'>
          {error && <h3>{error}</h3>}
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required/>
            <br />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>

            <div className='btn_div'>
              <button>Login</button>
              <button onClick={handleGoogleSignIn}>Login with Google</button>
            </div>

            <h4>Don't have an account ? <NavLink to="/signup">SignUp</NavLink></h4>

          </form>

        </div>


      </div>
    </>
  )
}

export default Login