import React from 'react'
import Image from "next/image"

const SearchBar = () => {
  return (
    <div className='w-full h-full flex justify-evenly items-center p-2 rounded-full border-2 border-[##767676]'>
      <div>
        <button className='flex items-center'>
          <Image src="/loupe.png" width="24" height="24" />
        </button>
      </div>
      <div>
        <input type="text" placeholder='Where to?' className='outline-none' />
      </div>
      <div>
        <button className='flex items-center rounded-full border-2 border-[##767676] p-1'>
          <Image src="/filter.png" width="24" height="24" />
        </button>
      </div>
    </div>
  )
}

export default SearchBar