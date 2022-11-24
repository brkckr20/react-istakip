import React from 'react'

const Card = ({children}) => {
    return (
        <div className='bg-gray-200 rounded p-2 shadow mt-2'>
            {children}
        </div>
    )
}

export default Card