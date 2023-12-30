import React from 'react'

function ImageBlock({url,name,position}) {
  return (
    <div className='w-56 border-2 p-1 bg-white'> 
        <img src={url} alt='udip'/>
        <h1 className='text-rose-500 font-bold text-center'>{name}</h1>
        <h3 className='text-center font-mono'>{position}</h3>
    </div>
  )
}

export default ImageBlock