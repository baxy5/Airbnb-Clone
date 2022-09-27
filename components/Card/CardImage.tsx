import React from 'react'
import Image from "next/image"

const CardImage = () => {
  return (
    <div className='relative'>
      <Image src="/a.jpg" layout='fill' />
    </div>
  )
}

export default CardImage