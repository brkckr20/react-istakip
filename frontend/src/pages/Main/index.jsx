import React from 'react'
import Card from '../../components/Card'
import { CompanyIcon } from '../../components/Icon';

import { useFetch } from '../../hooks'

const Main = () => {

    const { data : firmaData} = useFetch(`${process.env.REACT_APP_BASE_ENDPOINT}/company`);



    return (
        <div className='bg-gray-500 w-full h-screen pt-[60px] px-2'>
            <h4 className='text-white font-semibold tracking-wider border-b-2 border-white'>Özet Bilgiler</h4>
            <div className='grid grid-cols-2 gap-x-2'>
                <Card>
                    <h2 className='text-base'>Toplam Firma</h2>
                    <div className='flex justify-between py-2'>
                        <div>
                            <span>{firmaData.length} adet</span>
                        </div>
                        <div>
                            <CompanyIcon />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Main