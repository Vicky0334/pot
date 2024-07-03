import React from 'react'
import 'remixicon/fonts/remixicon.css'

const CenterFlex = () => {
  return (
    <div className='mt-20 text-white relative z-10 flex  justify-between pr-5 w-full '>
      <div className='flex bg-black items-center gap-5 px-4 py-3 pl-10 rounded-e-full'>
        <h2 className='text-xl leading-none'>Located <br />in the <br />Netherlands</h2>
        <div className='bg-gray-500 flex items-center justify-center h-20 w-20 rounded-full'>
          <i className="ri-global-line text-4xl rotate-12 font-thin"></i>
        </div>
      </div>
      <div className='flex flex-col  '>
        <i className="ri-arrow-right-down-line text-3xl"></i>
        <h2 className='text-4xl font-normal'>FreeLance <br />Designer and Developer</h2>
      </div>
    </div>
  )
}

export default CenterFlex