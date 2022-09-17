import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <div className='w-full sm:w-auto lg:w-full h-full float-left hidden sm:block'>
      <div className='relative w-24 h-7'>
        <Link href="/">
          <a>
            <Image src="/logo.png" layout='fill' />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Logo