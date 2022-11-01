import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCompany } from '../../redux/company/companySlice';

import Product from './Product';

const Tables = () => {

    const { companies } = useSelector(state => state.company);
    const { user } = useSelector(state => state.auth);
    const [selectedTab, setSelectedTab] = useState(null);
    const dispatch = useDispatch();

    function changeTab(name) {
        setSelectedTab(name)
    }

    async function changeTabSelected(item) {
        await setSelectedTab(item)
    }

    useEffect(() => {
        dispatch(getAllCompany());
        changeTabSelected();
        // eslint-disable-next-line
    }, [])

    return (
        <div className='w-full px-3 md:px-5 mt-4'>
            <div>
                <h1 className='text-white border-b border-b-gray-700'>Liste</h1>
            </div>
            <div className='relative'>
                <div className='mt-2'>
                    {
                        companies.map((item, index) => (
                            <button key={index} className={`p-1 ${selectedTab === item.slug ? 'bg-green-900 text-white' : 'bg-gray-200'} mr-1`} onClick={() => changeTab(item.slug)}>{item.name}</button>
                        ))
                    }
                </div>
                <div className={` w-full`}>
                    {
                        selectedTab ? (<Product selectedTab={selectedTab} />) : (
                            <div className='text-gray-400 mt-2'>
                                <span className='font-semibold text-white'>{user.username}</span>, sisteme hoş geldiniz. Sonuçları görmek için üst kısımdaki firma isimlerinden seçim yapınız.
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Tables