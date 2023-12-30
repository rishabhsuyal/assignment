import React from 'react'
import ImageBlock from '../../Component/ImageBlock/ImageBlock'
import CM from "../../Images/cm.jpg";
import CCM from "../../Images/ccm.jpg"

function Homepage() {
  return (
    <div className=''>

      <div className='bg-[url(https://www.newsclick.in/sites/default/files/styles/responsive_885/public/2022-11/tubewell.jpg?itok=QrKB9_ye)] h-32 flex justify-center items-center mb-5'>
        <div className='bg-yellow-400 p-3'>
          <h1 className='text-3xl text-white font-serif font-bold'>State Tubewell Automation System</h1>
        </div>
      </div>
      <div className='flex gap-5 justify-center' >
        <ImageBlock url={CM} name={"Yogi Adityanath"} position={"Hon'ble Chief Minister Uttar Pradesh"} />
        <ImageBlock url={CCM} name={"Shri Swatantra Dev Singh"} position={"Hon'ble Cabinet Minister Jal Shakti, Uttar Pradesh"} />
      </div>
    </div>
  )
}

export default Homepage