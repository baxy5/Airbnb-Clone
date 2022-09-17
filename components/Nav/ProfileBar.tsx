import React from 'react'
import Image from "next/image"

const ProfileBar = () => {
    return (
        <div className='hidden w-full h-full sm:flex items-center justify-around md:justify-center md:gap-3'>
            <div className='hover:bg-gray-100 p-2 rounded-full cursor-pointer'>Become a host</div>
            <div className='flex items-center hover:bg-gray-100 p-2 rounded-full cursor-pointer'>
                <Image src="/earth.png" width="16" height="16" />
            </div>
            <div>
                <div className='flex items-center justify-between gap-3 p-2 rounded-full border-2 cursor-pointer hover:shadow-md transition-all duration-150 ease-in-out'>
                    <div className='flex items-center'>
                        <Image src="/menu.png" width="16" height="16" />
                    </div>
                    <div className='flex items-center'>
                        <Image src="/profile.png" width="24" height="24" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBar