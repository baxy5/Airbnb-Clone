import React from 'react'

const Links = ({ data }: any) => {
    return (
        <div className='flex justify-center items-center'>
            <a href="/">
                {data}
            </a>
        </div>
    )
}

export default Links
