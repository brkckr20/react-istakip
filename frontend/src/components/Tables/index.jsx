import React, { useState } from 'react'
import Product from './Product';

const Tables = () => {

    const [selectedTab, setSelectedTab] = useState("hambez");

    function changeTab(name) {
        setSelectedTab(name)
    }

    return (
        <div className='w-full px-3 md:px-5 mt-4'>
            <div>
                <h1 className='text-white border-b border-b-gray-700'>Liste</h1>
            </div>
            <div className='relative'>
                <div className='tabs mt-2'>
                    <button className={`p-1 ${selectedTab === 'hambez' ? 'bg-green-900 text-white' : 'bg-gray-200'} mr-1`} onClick={() => changeTab("hambez")}>Hambez</button>
                    <button className={`p-1 ${selectedTab === 'simteks' ? 'bg-green-900 text-white' : 'bg-gray-200'}`} onClick={() => changeTab("simteks")}>Simteks</button>
                </div>
                <div className={`${selectedTab === 'hambez' ? '' : 'hidden'} w-full`}>
                    <Product />
                </div>
                <div className={`${selectedTab === 'simteks' ? '' : 'hidden'}`}>
                    simtex tablosu
                </div>

            </div>

        </div>
    )
}

export default Tables