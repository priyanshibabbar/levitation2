import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import SignUp from "../Components/SignUp";
import Forgot from "../Components/Forgot";


function Signin() {
    const navigate = useNavigate(); // Access the history object

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent form submission
      
        // Retrieve the entered email and password from the form
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
      
        // Perform your login logic here (e.g., validate credentials, make API calls, etc.)
        // Assuming the login is successful, redirect to the "Forms" page
        if (email.trim() !== '' && password.trim() !== '') {
          navigate('/Details');
        } else {
          // Handle login failure 
          console.log('Login failed');
        }
      };
      
      
  return (
    <>
        <div className='bg-zinc-200 h-screen flex justify-center items-center'>
            {/* Form */}
            <div className='bg-white h-96 w-[350px] pl-5 pr-5 flex flex-col justify-center rounded shadow-lg shadow-black/30'>
                <form className='space-y-3'>
                    <div>
                        <p className='text-3xl tracking-wide pb-2 pt-3 text-center'>LOGIN</p>
                    </div>
                    <div>
                        <p className='text-zinc-600 pb-2 pl-0.5 font-light'>Email</p>
                        <input className='outline-none pl-2 border border-sm h-10 w-full rounded' type='text' placeholder='email' name="email" required />
                    </div>
                    <div className='pb-1.5'>
                        <p className='text-zinc-600 pb-2 pl-0.5 font-light'>Password</p>
                        <input className='outline-none pl-2 border border-sm h-10 w-full rounded' type='password' placeholder='password'name="password" />
                    </div>
                    <div> 
                        <button className='bg-red-400 p-2 w-full rounded-full font-semibold text-white hover:bg-red-500 duration-300' type='submit' onClick={handleLogin}>LOGIN</button>
                        <p className='text-end pr-1 pt-1'><Link to='/Forgot' element={<Forgot />} className='text-sm text-zinc-600'>Forgot password?</Link></p>
                    </div>

                    <div>
                        <p className='text-center text-zinc-600 font-light'>
                            Need an account? <span className='text-black font-bold'><Link to ="/SignUp" element={<SignUp />}>SignUp</Link></span>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    </>
  )
}

export default Signin;
