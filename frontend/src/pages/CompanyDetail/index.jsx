import React from 'react'
import Input from '../../components/Input'

const CompanyDetail = () => {
    return (
        <div className='pt-16 '>
            <div className='text-white text-sm mb-2 border-b border-white pb-2 mx-2'>Gönderilen Ürün Bilgileri Formu ( Hambez )</div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='grid grid-cols-2 text-center'>
                    <div>
                        <Input placeholder="Ürün Metresi" />
                    </div>
                    <div>
                        <Input placeholder="Birim Fiyat" />
                    </div>
                    <div>
                        <Input type='date' />
                    </div>
                    <div>
                        <Input disabled={true} value="Hambez" />
                    </div>
                </div>
                <div>
                    <button className='bg-green-600 hover:bg-green-800 duration-300 text-white p-[6px] ml-2 rounded-sm'>Kaydet</button>
                </div>
            </form>

            <div className='mt-2'>
                <div className='text-white text-sm mb-2 border-b border-white pb-2 mx-2'>Alınan Para Bilgileri Formu ( Hambez )</div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='grid grid-cols-2 text-center'>
                        <div>
                            <Input placeholder="Alınan Para Miktarı" />
                        </div>
                        <div>
                            <Input placeholder="Açıklama" />
                        </div>
                        <div>
                            <Input type='date' />
                        </div>
                        <div>
                            <Input disabled={true} value="Hambez" />
                        </div>
                    </div>
                    <div>
                        <button className='bg-blue-600 hover:bg-blue-800 duration-300 text-white p-[6px] ml-2 rounded-sm'>Kaydet</button>
                    </div>
                </form>
            </div>
            <div className='text-white mt-2 mx-2'>
                Gönderilen ürünlerin ve alınan paraların listeleneceği tablolar
            </div>
        </div >
    )
}

export default CompanyDetail