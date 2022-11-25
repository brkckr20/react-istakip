import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, menuOpen, setMenuOpen }) => {

    return (
        <li className='bg-gray-300 p-2 mt-3' onClick={() => setMenuOpen(!menuOpen)}>
            <Link to={`/firma/${item.slug}`} className='text-black block'>{item.name}</Link>
        </li>
    )
}

export default MenuItem