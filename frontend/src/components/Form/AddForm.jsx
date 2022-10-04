import React from 'react'
import { Arti } from '../Icon'

const AddForm = () => {
    return (
        <div className='w-full'>
            <div className='mb-2'>
                <h3 className='uppercase text-white text-center text-2xl'>Para ekleme formu</h3>
            </div>
            <div>
                <form>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                        <div>
                            <input type="text" className='w-full outline-none p-1 pl-2 rounded-sm' placeholder='Ürün Metresi' />
                        </div>
                        <div>
                            <input type="text" className='w-full outline-none p-1 pl-2 rounded-sm' placeholder='Ürün Birim Fiyat' />
                        </div>
                        <div>
                            <input type="date" className='w-full outline-none p-1 pl-2 rounded-sm' placeholder='Ürün Metresi' />
                        </div>
                        <div>
                            <input type="text" className='w-full outline-none p-1 pl-2 rounded-sm' placeholder='Firma Seçiniz' />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className='bg-blue-700 hover:bg-blue-800 transition-colors md:px-2 md:py-2 px-1 py-1 rounded-sm mt-2 text-white w-auto flex items-center'><span>Kaydet</span> <Arti /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddForm