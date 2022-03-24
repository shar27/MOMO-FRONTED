import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className='container relative bg-cover z-0  w-full md:w-full lg:w-full h-96 md:h-66 lg:h-96 top-12 md:top-24 lg:top-44'>
    <Image src="/newspaper.jpg" layout='fill' />
    <div className='absolute z-30 top-20 '>
    
    <Image src="/copywriting.jpg" width="200"  height="200" />

    </div>
    </div>
  )
}

export default Hero