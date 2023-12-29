import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-10 justify-center items-center font-serif ' style={{height:"70vh"}}>
            <h1 className='text-2xl'>LOGIN</h1>
                <div className='w-1/2 bg-gray-100 border-4 p-10'>
                    <label for="first_name" class=" mb-1 text-sm font-medium">Username</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />
                    <p className='mt-4'></p>
                    <label for="first_name" class=" mb-1 text-sm font-medium">Password</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />
                    <button onClick={()=>navigate('/tubewell')} type="button" class="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Login
                    </button>
                </div>
            
        </div>
    )
}

export default Login