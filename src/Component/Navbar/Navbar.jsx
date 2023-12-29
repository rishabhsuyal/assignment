import React from 'react'
import Logo from "../../Images/logo.png"
import { Link } from "react-router-dom";
function Navbar() {

    const time = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

   
   
    const month=time.getMonth();
    const date=time.getDate();
    const day=time.getDay();
    
    
    return (
        <nav className='mb-5'>
            <div className='bg-gray-100 flex justify-between font-mono p-1'>
                <h2 className=''>{weekday[day]}, {months[month]} {date}, 2023 </h2>
                <div className='flex gap-2'>
                    <h2 className='font-bold'><Link to="/">Home</Link></h2>
                </div>

                
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-5 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                <Link to="/login">Login</Link>
                </button>
                  
                
            </div>
            <div className='flex justify-between items-center mx-4 mt-6'>
                <div>
                    <img alt='idup_logo' src={Logo} />
                </div>
            </div>

        </nav>
    )
}

export default Navbar