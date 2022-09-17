import React from 'react'
import { Logo, ProfileBar, SearchBar } from "./Nav/index.js"

const Nav = () => {
    return (
        <div className='lg:px-24'>
            <div className='flex justify-between p-5'>
                <Logo />
                <SearchBar />
                <ProfileBar />
            </div>
        </div>
    )
}

export default Nav;