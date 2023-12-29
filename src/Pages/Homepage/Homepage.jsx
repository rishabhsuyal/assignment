import React from 'react'
import ImageBlock from '../../Component/ImageBlock/ImageBlock'
import CM from "../../Images/cm.jpg";
import CCM from "../../Images/ccm.jpg"

function Homepage() {
  return (
    <div className='bg-[url(https://i.pinimg.com/564x/ff/5a/a9/ff5aa9f0387f70a6bf710caeb45ee699.jpg)] bg-cover h-[75vh]'>
    <h1 className='text-3xl text-center font-mono p-10  font-bold'>State Tubewell Automation System</h1>
      <div className='flex gap-5 justify-center' >
        <ImageBlock url={CM} name={"Yogi Adityanath"} position={"Hon'ble Chief Minister Uttar Pradesh"} />
        <ImageBlock url={CCM} name={"Shri Swatantra Dev Singh"} position={"Hon'ble Cabinet Minister Jal Shakti, Uttar Pradesh"} />
    </div>
    </div>
  )
}

export default Homepage