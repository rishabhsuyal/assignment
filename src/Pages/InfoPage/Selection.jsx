import React from 'react'
import Sidebar from '../../Component/SideBar/Sidebar'
function Selection() {
    return (
        <div>

            {/* <div className='flex justify-between h-20 text-2xl font-bold'>
                <div className='bg-blue-200 w-1/3 flex justify-center items-center'>
                    Running Status
                </div>
                <div className='bg-rose-200 w-1/3 flex justify-center items-center'>
                    Camera
                </div>
                <div className='bg-[#6581B1] w-1/3 flex justify-center items-center'>
                    Config
                </div>
            </div> */}

            <div className='flex justify-center m-5'>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-1/3">
                    <option selected>Select Zone</option>
                    <option value="US">Lucknow Zone</option>
                    <option value="CA">Barabanki Zone</option>
                </select>
            </div>
            
            <Sidebar 
            heading={"Lucknow Tubewell"} 
            data={["STW1","STW2","STW3","STW4","STW5"]}
            />
        </div>
    )
}

export default Selection