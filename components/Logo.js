import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
    <div>
    <Image
    src="/momo.png"
        width={200}
        height={200}
    />
    </div>
  )
}

export default Logo