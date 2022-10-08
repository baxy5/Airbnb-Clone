import React from 'react'
import Image from "next/image"

const CardImage = () => {
  return (
    <div className='relative'>
      <div className="absolute top-5 right-5 z-50">
        <Image src="/love.png" height={16} width={16} />
      </div>
      {/* carousel */}
      <Image src="/kaneki.jpg" width={300} height={300} className="rounded-xl  object-cover" />
    </div>
  )
}

export default CardImage