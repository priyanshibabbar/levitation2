import React from 'react'

function Forgot() {
  return (
    <>
        <div className='bg-zinc-200 h-screen flex justify-center items-center'>
            {/* Form */}
            <div className='bg-white h-96 w-[350px] pl-5 pr-5 flex flex-col justify-center rounded shadow-lg shadow-black/30'>
                <form className='space-y-3'>
                    <div>
                        <p className='text-3xl tracking-wide pb-2 text-center'>FORGOT PASSWORD</p>
                    </div>
                    <div>
                        <p className='text-zinc-600 pb-2 pl-0.5 font-light'>Email</p>
                        <input className='outline-none pl-2 border border-sm h-10 w-full rounded' type='text' placeholder='email' required />
                    </div>
                    
                    <div> 
                        <button className='bg-red-400 p-2 w-full rounded-full font-semibold text-white hover:bg-red-500 duration-300'>Forgot Password</button>
                    </div>

                    

                </form>
            </div>
        </div>
    </>
  )
}

export default Forgot;