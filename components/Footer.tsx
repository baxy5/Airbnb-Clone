import React from 'react'
import Image from "next/image"

import { Links } from "./Footer/index"

const Footer = () => {
  return (
    <div className='xl:px-20 flex flex-col md:flex-row justify-between text-sm border-t-2 fixed bottom-0 w-full p-3'>
      <div className='flex items-center gap-10 flex-col md:flex-row'>
        <p>© 2022 Airbnb, Inc.</p>
        <Links data="Adatvédelem" />
        <Links data="Feltételek" />
        <Links data="Oldaltérkép" />
        <Links data="Céges adatok" />
      </div>
      <div className='flex items-center gap-5 flex-col md:flex-row'>
        <Image src="/earth.png" width={16} height={16} className="cursor-pointer" />
        <a href="/">Magyar (HU)</a>
        Ft
        HUF
        <a href="/">
          Ügyfélszolgálat és információk</a>
      </div>
    </div>
  )
}

export default Footer