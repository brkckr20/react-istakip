import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCompany } from '../../redux/company/companySlice'

import Product from './Product';

const Tables = () => {

    const [selectedTab, setSelectedTab] = useState("hambez");
    const { companies } = useSelector(state => state.company);
    const dispatch = useDispatch();

    function changeTab(name) {
        setSelectedTab(name)
    }

    useEffect(() => {
        dispatch(getAllCompany());
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
                    {/* ${selectedTab === 'hambez' ? '' : 'hidden'}  div in class'ı*/}
                    <Product selectedTab={selectedTab} />
                </div>

            </div>

        </div>
    )
}

export default Tables