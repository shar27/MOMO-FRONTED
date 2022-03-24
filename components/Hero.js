import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className='container relative bg-cover z-0 w-full h-96 top-44 ml-10'>
    <Image src="/newspaper.jpg" layout='fill' />
    <div className='absolute z-50 ml-20 mt-20'>
    
    <Image src="/copywriting.jpg" width="300"  height="200" />

    </div>
    </div>
  )
}

export default Hero