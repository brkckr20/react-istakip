import React from 'react'
import { Sil } from '../Icon'

const Product = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-2 md:gap-x-2'>
            <div>
                <h4 className='text-white mb-2'>Gönderilen Bez (Hambez)</h4>
                <table className='border-collapse border border-slate-400 mb-2 md:mb-0 w-full'>
                    <thead>
                        <tr className='bg-gray-400  text-center'>
                            <td>Br.Fiyat</td>
                            <td>Mt.</td>
                            <td>Tutar</td>
                            <td>Tarih</td>
                            <td>İşlem</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center text-white bg-gray-700'>
                            <td className='border border-slate-300'>100</td>
                            <td className='border border-slate-300'>780 mt</td>
                            <td className='border border-slate-300'>20000 tl</td>
                            <td className='border border-slate-300'>03.10.2022</td>
                            <td className='flex justify-center'><Sil /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h4 className='text-white mb-2'>Alınan Para Bez (Hambez)</h4>
                <table className='border-collapse border border-slate-400 mb-2 md:mb-0  w-full'>
                    <thead>
                        <tr className='bg-gray-400 text-center'>
                            <td>Br.Fiyat</td>
                            <td>Mt.</td>
                            <td>Tutar</td>
                            <td>Tarih</td>
                            <td>İşlem</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center text-white bg-gray-700'>
                            <td>100</td>
                            <td>780 mt</td>
                            <td>20000 tl</td>
                            <td>03.10.2022</td>
                            <td className='flex justify-center'><Sil /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product