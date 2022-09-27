import React from 'react'
import Image from "next/image"

const CardImage = () => {
  return (
    <div className=''>
      <Image src="/love.png" height={16} width={16} className="absolute top-0 right-0" />
      {/* carousel */}
      <Image src="/a.jpg" width={300} height={300} className="rounded-xl" />
    </div>
  )
}

export default CardImage