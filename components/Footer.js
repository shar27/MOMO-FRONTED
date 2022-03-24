import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <div className='bg-slate-300 h-72 mt-20'>
    <div className='grid grid-cols-4'>
    <div>
    <h1>TITLE</h1>
    <h3>information</h3>
    <h3>information</h3>
    <h3>information</h3>
    </div>
    <div>
    <h1>TITLE</h1>
    <h3>information</h3>
    <h3>information</h3>
    <h3>information</h3>
    </div>
    <div>
    <h1>Title</h1>
    <h3>information</h3>
    <h3>information</h3>
    <h3>information</h3>
    </div>
    <div>
    <div>
    <Image src="/momo.png" width="100" height="100"  />
    
    </div>
    <div>
    <Image src="/momo.png" width="100" height="100"  />
    </div>
    <Image src="/momo.png" width="100" height="100"  />
    </div>
    </div>
    </div>
  )
}

export default Footer