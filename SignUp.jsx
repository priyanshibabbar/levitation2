import React from 'react';
import {Link} from 'react-router-dom';
import Login from '../Components/Signin';

function SignUp() {
  return (
    <div className='bg-zinc-200 h-screen flex justify-center items-center'>
            {/* Form */}
            <div className='bg-white h- w-[350px] pl-5 pr-5 flex flex-col justify-center rounded shadow-lg shadow-black/30'>
                <form className='space-y-3 pt-8 pb-8'>
                    <div>
                        <p className='text-3xl tracking-wide pb-2 pt-3 text-center'>SignUp</p>
                    </div>
                    <div>
                        <p className='text-zinc-600 pb-2 pl-0.5 font-light'>Name</p>
                        <input className='outline-none pl-2 border border-sm h-10 w-full rounded' type='text' placeholder='name' required />
                    </div>
                    <div>
                        <p className='text-zinc-600 pb-2 pl-0.5 font-light'>Email</p>
                        <input className='outline-none pl-2 border border-sm h-10 w-full rounded' type='text' placeholder='email' required />
                    </div>
                    <div className='pb-2'>
                        <p className='text-zinc-600 pb-2 pl-0.5 font-light'>Password</p>
                        <input className='outline-none pl-2 border border-sm h-10 w-full rounded' type='password' placeholder='password'/>
                    </div>
                    <div> 
                        <button className='bg-red-400 p-2 w-full rounded-full font-semibold text-white hover:bg-red-500 duration-300'>SignUp</button>
                    </div>
                    <div>
                        <p className='text-center text-zinc-600 font-light pt-2'>
                            Already have an account? <span className='text-black font-bold'><Link to ="/" element={<Login />}>Login</Link></span>
                        </p>
                    </div>

                </form>
            </div>
        </div>
  )
}

export default SignUp