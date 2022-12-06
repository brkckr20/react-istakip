import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/authSlice';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { MenuIcon, CloseIcon, LogoutIcon, SettingsIcon } from '../Icon'
import MenuItem from './MenuItem';

import { useFetch } from '../../hooks';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const { data, error, loading } = useFetch(`${process.env.REACT_APP_BASE_ENDPOINT}/company`);
    const dispatch = useDispatch();
    const { user } = useSelector(s => s.auth);
    const [menuOpen, setMenuOpen] = React.useState(false)

    function cikis() {
        Confirm.show(
            'Uyarı',
            'Çıkış yapmak istediğinize emin misiniz?',
            'Evet',
            'Hayır',
            function okCb() {
                dispatch(logoutUser())
            },
            {
                width: '320px',
                borderRadius: '8px',
                backgroundColor: '#212020',
                titleColor: 'white',
                messageColor: 'white'
            },
        );
    }

    if (loading) {
        return (
            <div>Yükleniyor</div>
        )
    }

    if (error) {
        return (
            <div>Hata</div>
        )
    }


    return (
        <>
            <div className='p-3 text-white bg-gray-700  fixed right-0 left-0 top-0'>
                <div className='flex items-center justify-between'>
                    <div className='uppercase'>{user.username}</div>
                    <div className='flex'>

                        <div className='block mr-3 md:hidden bg-red-500 p-1 rounded-full' onClick={cikis}>
                            <LogoutIcon />
                        </div>
                        <div className='block md:hidden bg-gray-500 p-1 rounded-full' onClick={() => setMenuOpen(!menuOpen)}>
                            <MenuIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className={menuOpen ? 'fixed inset-0 bg-black/70 z-[1002]' : ''}>
                <div className={`text-white fixed inset-0 bg-gray-900 w-3/4 p-3 duration-300 ease-in-out ${menuOpen ? 'left-0' : 'left-[-100%]'}`}>
                    <div className='flex items-center justify-between'>
                        <div className='uppercase'>{user.username}</div>
                        <div className='block md:hidden bg-gray-500 p-1 rounded-full' onClick={() => setMenuOpen(!menuOpen)}>
                            <CloseIcon />
                        </div>
                    </div>

                    <div>
                        <ul>
                            <>
                                <li className='bg-gray-100 rounded-lg p-2 mt-3 w-full block' onClick={() => setMenuOpen(!menuOpen)}>
                                    <Link to="/" className='text-black'>Anasayfa</Link>
                                </li>
                                {
                                    data.map(item => (
                                        <MenuItem key={item._id} item={item} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                                    ))
                                }
                                <li className='bg-red-800 rounded-lg p-2 mt-3 w-full flex gap-x-2' onClick={() => setMenuOpen(!menuOpen)}>
                                    <SettingsIcon fill="white" />
                                    <Link to="/firma" className='text-white'>Ayarlar</Link>
                                </li>
                            </>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation