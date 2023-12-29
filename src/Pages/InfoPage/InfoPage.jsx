import React from 'react'
import Sidebar from '../../Component/SideBar/Sidebar'

function InfoPage() {
  return (
    <div>

      {/* header */}
      <div className='bg-[url(https://t3.ftcdn.net/jpg/05/12/01/78/360_F_512017875_2R6eN5krsEM9ZOcbGnYwtuHLIyAQCMyS.jpg)] backdrop-blur-sm h-36 flex justify-center items-center'>
        <div className='bg-yellow-300 font-bold w-fit h-16 p-4 '>
          Lucknow Zone/ STW1
        </div>

        <div className='bg-pink-100 h-16 w-12 flex items-center justify-center' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
        </div>
      </div>
      <div className='flex p-10 gap-4'>
        <img className='w-[250px] h-[250px]' src='https://www.newsclick.in/sites/default/files/styles/responsive_885/public/2022-11/tubewell.jpg?itok=QrKB9_ye'/>
        <img className="w-[250px] h-[250px]" src='https://www.newsclick.in/sites/default/files/styles/responsive_885/public/2022-11/tubewell.jpg?itok=QrKB9_ye'/>
        <img className="w-[250px] h-[250px]" src='https://www.newsclick.in/sites/default/files/styles/responsive_885/public/2022-11/tubewell.jpg?itok=QrKB9_ye'/>
      </div>


    </div>
  )
}

export default InfoPage