import React from 'react';

const MenuItem = ({ item }) => {

    return (
        <li className='bg-gray-300 p-2 mt-3'>
            <div className='text-black'>{item.name}</div>
        </li>
    )
}

export default MenuItem