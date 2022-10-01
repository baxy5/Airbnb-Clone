import React from 'react'

import { CardImage, CardInfo } from "./Card/index"

const Card = () => {
    return (
        <div className='cursor-pointer'>
            <CardImage />
            <CardInfo />
        </div>
    )
}

export default Card