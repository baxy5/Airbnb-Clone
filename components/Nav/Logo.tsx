import React from 'react'
import Image from "next/image"

const Logo = () => {
  return (
    <div className='w-full h-full float-left hidden sm:block'>
      <div className='relative w-24 h-7'>
        <Image src="/logo.png" layout='fill' />
      </div>
    </div>
  )
}

export default Logo