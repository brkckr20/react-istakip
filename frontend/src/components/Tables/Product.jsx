import React, { useEffect } from 'react'
import { Sil } from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, productRemove } from '../../redux/product/productSlice';
import moment from 'moment'
import trLocale from 'moment/locale/tr'

const Product = ({ selectedTab }) => {
    const { isLoading, products } = useSelector(state => state.product);
    const { moneys } = useSelector(state => state.money);
    const dispatch = useDispatch();
    const filteredData = products.filter(item => item.company === selectedTab);
    const filteredMoney = moneys.filter(item => item.company === selectedTab)

    const sumSendProductTotalMoney = filteredData.reduce((acc, object) => {
        return acc + object.amount
    }, 0)

    const sumSendProductTotalMeter = filteredData.reduce((acc, object) => {
        return acc + object.meter
    }, 0)

    function remove(id) {
        dispatch(productRemove(id));
        dispatch(getProduct());
    }

    useEffect(() => {
        moment.updateLocale("tr", trLocale);
        dispatch(getProduct());


        // eslint-disable-next-line react-hooks/exhaustive-deps
        // eslint-disable-next-line
    }, [selectedTab])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-2 md:gap-x-2'>
            {
                isLoading ? <div>Yükleniyor...</div> : (
                    <>
                        {
                            products.length < 1 ? (
                                <div className='px-1'>
                                    <h1 className='text-white text-md'>Kayıtlı ürün bulunamadı. Lütfen ekleme yapınız</h1>
                                </div>
                            ) : (
                                <div>
                                    <h4 className='text-white mb-2'>Gönderilen Bez ({selectedTab})</h4>
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
                                            {
                                                filteredData?.map(product => (
                                                    <tr key={product._id} className='text-center text-white bg-gray-700'>
                                                        <td className='border border-slate-300'>{product.unitPrice}</td>
                                                        <td className='border border-slate-300'>{product.meter}</td>
                                                        <td className='border border-slate-300'>{(product.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} tl</td>
                                                        <td className='border border-slate-300'>{moment(product.date).format('L')}</td>
                                                        <td className='flex justify-center border border-slate-300'><span className='flex items-center' onClick={() => remove(product._id)}><Sil /></span></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr className='bg-white'>
                                                <td>Toplam : </td>
                                                <td className='text-center font-semibold'>{sumSendProductTotalMeter.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} mt</td>
                                                <td className='text-center font-semibold'>{sumSendProductTotalMoney.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} tl</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            )
                        }
                        <div>
                            <h4 className='text-white mb-2'>Alınan Para Bez ({selectedTab})</h4>
                            <table className='border-collapse border border-slate-400 mb-2 md:mb-0  w-full'>
                                <thead>
                                    <tr className='bg-gray-400 text-center'>
                                        <td>Alınan miktar</td>
                                        <td>Açıklama</td>
                                        <td>Tarih</td>
                                        <td>İşlem</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredMoney.map((item, index) => (
                                            <tr key={index} className='text-center text-white bg-gray-700'>
                                                <td className='border border-slate-300'>{item.receivedMoney}</td>
                                                <td className='border border-slate-300'>{item.description}</td>
                                                <td className='border border-slate-300'>{moment(item.date).format('L')}</td>
                                                <td className='flex justify-center border border-slate-300'><Sil /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Product