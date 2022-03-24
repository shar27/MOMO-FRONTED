import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <div className='bg-black text-white font-bold h-72 mt-20 w-full md:w-full lg:w-full'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
    <div className='mt-5'>
    <h1 className='font-serif underline'>Information</h1>
    <h3 className='font-bold'>information</h3>
    <h3 className='font-bold'>information</h3>
    <h3 className='font-bold'>information</h3>
    </div>
    <div className='mt-5'>
    <h1 className='font-serif underline'>Customer service</h1>
    <h3 className='font-bold'>information</h3>
    <h3 className='font-bold'>information</h3>
    <h3 className='font-bold'>information</h3>
    </div>
    <div className='mt-20 md:mt-5 lg:mt-5'>
    <h1 className='font-serif underline text-black'>Newsletter</h1>
    <input className='w-66 border-2 rounded-lg ' placeholder='email address' />
    </div>
    
    </div>
    <div className='flex justify-center md:justify-center lg:justify-center mt-20 md:mt-0 lg:mt-16'>
    
    <Image className='rounded-full' src="/momo.png" width="100" height="100"  />
    
    
   
    <Image className='rounded-full' src="/momo.png" width="100" height="100"  />
  
    <Image className='rounded-full' src="/momo.png" width="100" height="100"  />
    </div>
    </div>
  )
}

export default Footer