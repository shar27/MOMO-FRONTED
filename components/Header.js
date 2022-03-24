import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Image from 'next/image'
function Header() {
  return (
    <div className='flex justify-center md:justify-center lg:justify-start'>
         <Image
    src="/momo.png"
        width={200}
        height={200}
    />
    <div className='mt-16 flex justify-center md:justify-center lg:justify-center ml-10 md:ml-24 lg:ml-44 '>
          <input className=' w-44 md:w-66 lg:w-96 h-12 md:h-12 lg:h-12 border-2 rounded-lg' placeholder='search...' />
          </div>
    </div>
  )
}

export default Header