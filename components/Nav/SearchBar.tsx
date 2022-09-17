import React from 'react'
import Image from "next/image"

const SearchBar = () => {
  return (
    <div className='w-full h-full flex justify-evenly items-center cursor-pointer p-2 rounded-full border-2 shadow-md hover:shadow-lg transition-all duration-150 ease-in-out'>
      <div>
        <button className='flex items-center '>
          <Image src="/loupe.png" width="24" height="24" />
        </button>
      </div>
      <div>
        <input type="text" placeholder='Where to?' className='outline-none bg-transparent' />
      </div>
      <div>
        <button className='flex items-center rounded-full border-2 p-1'>
          <Image src="/filter.png" width="24" height="24" />
        </button>
      </div>
    </div>
  )
}

export default SearchBar