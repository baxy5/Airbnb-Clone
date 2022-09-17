import React from 'react'
import { Logo, ProfileBar, SearchBar } from "./Nav/index.js"

const Nav = () => {
    return (
        <div className='xl:px-20 border-b-2'>
            <div className='flex justify-between items-center gap-5 p-5'>
                <Logo />
                <SearchBar />
                <ProfileBar />
            </div>
        </div>
    )
}

export default Nav;