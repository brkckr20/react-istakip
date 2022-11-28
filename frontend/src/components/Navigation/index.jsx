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
            <div className={menuOpen && 'fixed inset-0 bg-black/70 z-[1002]'}>
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


/*
<div className='py-2'>
            <div className="flex justify-end px-5">
                <Link to="/" className='bg-green-700 hover:bg-green-900 transition-colors p-2 rounded-xl text-white mr-1'>
                    <Home />
                </Link>
                <Link to="/firma" className='bg-green-700 hover:bg-green-900 transition-colors p-2 rounded-xl text-white mr-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>
                <button className='bg-red-700 hover:bg-red-900 transition-colors p-2 rounded-xl text-white' onClick={cikis}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className='w-7' xmlns="http://www.w3.org/2000/svg"><path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z"></path></svg>
                </button>
            </div>
        </div>

*/