import React from 'react'
import Image from 'next/image'
function CandleGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2 lg:gap-4'>
    <Image src="/bgimgblur.jpg" width={300} height={300} />
    <Image src="/bgimgblur.jpg" width={300} height={300} />
    <Image src="/bgimgblur.jpg" width={300} height={300} />
    <Image src="/bgimgblur.jpg" width={300} height={300} />
    <Image src="/bgimgblur.jpg" width={300} height={300} />
    <Image src="/bgimgblur.jpg" width={300} height={300} />

    </div>
  )
}

export default CandleGrid