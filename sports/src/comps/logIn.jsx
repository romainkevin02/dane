import './login.css'
import { useState } from 'react'
function Login(){
    const [email,setEmail] = useState(" ");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const  handlelogin = () =>{
        if(email == 'admin@example.com' && password == 'admin'){
            setMessage("correct identity")
        }
    
        else{
            setMessage("wrong identity nigga")
        }
    }
   


   
    return(
        <>
        <div className='container'>
            <form action="">
                <p className='header'>
                    login
                </p>
            <label htmlFor="Email">Email:</label>
            <input type="email" className='form-input' id='email'  placeholder='Enter Email'  onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="Password">Password:</label>
            <input type="password" className='form-input' id='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />

            <input type="checkbox"  id="passwordshow" onChange={() => setShowPassword(!showPassword)} />show password

            <button type='button' className='button' onClick={ handlelogin}>Sign In</button>
            
            {message && <p className='msg'>{message}</p>}

            <p>forgot <a href="#">Username/Password</a>?</p>
            <p>Don't have account?<a href="#">Sign up</a></p>
            </form>
        </div>
        </>
    )
}

export default Login

