import './FaceBook.css'

function FaceBook(){
    return(
        <>
         <div className='content'>
            <div>
                <h1>Facebook</h1>
                <p>Connect with friends and the world around you on Facebook.</p>
            </div>
              <form action="">
                <input type="text" className='form-input' placeholder='email or number' />
                <input type="text" className='form-input' placeholder='password' />
                <button type='button' className='login'>Log in</button>
                <a href="#">Forgot Password?</a>
                <hr />
                <button className='create'>Create account</button>
              </form>
         </div>
        </>
    )
}

export default FaceBook