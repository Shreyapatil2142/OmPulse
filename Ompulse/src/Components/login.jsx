import React from 'react'
import Logo from '../assets/loginimg.png'
import Logo1 from '../assets/v1.png'
import Logo2 from '../assets/v2.png'
import Logo3 from '../assets/eye.png'
import { Outlet, Link } from "react-router-dom"

function login() {
  return (
    <div className='flex flex-col h-screen w-full'>
        <div className='h-20 rounded-lg p-5 flex flex-row justify-between border-b-2'>
            <span className='font-bold text-xl text-indigo-600 ml-10'>OMRONIX</span>
            <div className='mr-10 flex gap-10'>
                <button className='border-2 rounded-3xl p-2 h-11 w-25 bg-purple-600 hover:bg-purple-500 font-bold text-white border-black'>Signup</button>
                {/* <Link to="/login"> */}
                    <button className='border-2 rounded-3xl p-2 h-11 w-25 bg-purple-600 hover:bg-purple-500 font-bold text-white border-black'>Log in</button>
                {/* </Link> */}
            </div>


        </div>
            <div className='bg-white h-screen w-full p-10 flex'>
                    <div className='w-1/2'>
                        <img src={Logo} alt="logo" className='h-120 ml-20'/>
                    </div>
                    <div className='w-1/2 flex flex-col'>
                        <div className='flex flex-col mt-5'>
                            <span className='font-semibold text-4xl '>Welcome to</span>
                            <span className='font-bold text-5xl text-indigo-500'>OMRONIX</span>
                        </div>
                        <div className='pt-10 flex flex-col gap-4'>
                            <div className='h-17 bg-gray-400 w-150 rounded-xl p-2 flex gap-8'>
                                <img src={Logo1} alt="" className='h-6 mt-3 ml-3 '/>
                                <div className='flex flex-col'>
                                    <span className='font-bold mt-0'>Email</span>
                                    <input type="text" placeholder='email@gmail.com' className='font-bold focus:outline-none focus:border-none h-10 w-110'/>
                                </div>
                            </div>
                            <div className='h-17 bg-gray-400 w-150 rounded-xl p-2 flex gap-8'>
                                <img src={Logo2} alt="" className='h-6 mt-3 ml-3 '/>
                                <div className='flex flex-col'>
                                    <span className='font-bold mt-0'>Password</span>
                                    <input type="text" placeholder='*********' className='font-bold focus:outline-none focus:border-none h-10 w-110'/>
                                </div>
                                <img src={Logo3} alt="" className='h-6 mt-4 mr-' />
                            </div>

                            <div className='flex justify-between'>
                                <div>

                                <input type="Checkbox" className='size-3.5'/>
                                <span className='font-semibold ml-2'>Remember me</span>
                                </div>
                                <span className='font-semibold text-blue-400 hover:text-blue-700 mr-35'>Forget Password ?</span>

                            </div>
                            <button className='h-15 bg-purple-600 hover:bg-purple-500 w-150 rounded-xl p-2 font-bold text-white text-xl'>Login</button>
                        </div>
                        
                    </div>
            </div>
    </div>
  )
}

export default login