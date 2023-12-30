import React,{useState} from 'react'
import Sidebar from '../../Component/SideBar/Sidebar'
import { LUCKNOW_ZONE, BARABANKI_ZONE } from '../../Constant'


function Selection() {
    const [zone, setZone ] = useState(null);
    return (
        <div>

            <div className='flex justify-center m-5'>
                <select onChange={(e)=>{setZone(e.target.value)}} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-1/3">
                    <option selected >Select Zone</option>
                    <option value={LUCKNOW_ZONE}>Lucknow Zone</option>
                    <option value={BARABANKI_ZONE}>Barabanki Zone</option>
                </select>
            </div>
            
            {
                zone && 
               <Sidebar 
                 heading={zone} 
                 data={["STW1","STW2","STW3","STW4","STW5"]}
            />
            }

        </div>
    )
}

export default Selection