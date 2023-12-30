import React from 'react'
import { useNavigate } from 'react-router-dom';

function Sidebar({heading, data}) {
    const navigate = useNavigate();
    return (
        <div className='w-full font-serif'>
            <div className='bg-blue-500 text-white p-3'>
                {heading}
            </div>
            <ul className='bg-blue-200 '>
            <li onClick={()=>navigate(`/${heading}/summary`)} className='border-2 p-2 hover:bg-blue-300'>Summary</li>
                {
                    data.map(item=><li onClick={()=>navigate(`/${heading}/${item}`)} className='border-2 p-2 hover:bg-blue-300'>{item}</li>)
                }
            </ul>

        </div>
    )
}

export default Sidebar