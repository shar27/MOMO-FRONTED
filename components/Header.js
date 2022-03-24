import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Image from 'next/image'
function Header() {
  return (
    <div className='flex justify-start'>
         <Image
    src="/momo.png"
        width={200}
        height={200}
    />
    <div className='mt-16 flex justify-center ml-44 '>
          <input className='w-96 h-12 border-2 rounded-lg' placeholder='search...' />
          </div>
    </div>
  )
}

export default Header