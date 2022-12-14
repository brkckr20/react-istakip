import React, { useEffect } from 'react';
import moment from 'moment';
import trLocale from 'moment/locale/tr'
import { Sil } from '../Icon';
import { useDelete } from '../../hooks';

const Table = ({ data, filteredMoney }) => {

    moment.updateLocale("tr", trLocale);

    const { deleteData, data: rmv } = useDelete();

    const handleDelete = (table, id) => {
        switch (table) {
            case "money":
                deleteData(`${process.env.REACT_APP_BASE_ENDPOINT}/money/${id}`);
            case "product":
                deleteData(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`);
            default:
                break;
        }

    }

    const sumSendMeter = data.reduce((acc, object) => {
        return acc + object.meter
    }, 0);

    const sumSendPrice = data.reduce((acc, object) => {
        return acc + object.amount
    }, 0);

    const sumReceivedMoney = filteredMoney.reduce((acc, object) => {
        return acc + object.receivedMoney
    }, 0);

    useEffect(() => {
    }, [sumSendMeter, sumSendPrice])

    return (
        <>
            <h2 className='bg-green-700 mb-2 text-sm pl-2 text-center'>Gönderilen Bez Tablosu</h2>
            <table className='border border-gray-300 w-full'>
                <thead className='bg-gray-300'>
                    <tr className='text-black divide-x text-sm divide-gray-900 text-center'>
                        <td>Br.Fiyat</td>
                        <td>Metre</td>
                        <td>Mal Tutarı</td>
                        <td>Tarih</td>
                        <td>İşlem</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr key={item._id} className='text-center text-sm divide-x'>
                                <td>{item.unitPrice} tl</td>
                                <td>{item.meter} mt</td>
                                <td>{item.unitPrice * item.meter} tl</td>
                                <td>{moment(item.date).format('L')}</td>
                                <td onClick={() => handleDelete("product", item._id)}><Sil /></td>
                            </tr>
                        ))
                    }
                </tbody>
                {
                    data.length > 0 && (
                        <tfoot>
                            <tr className='bg-white text-black text-sm text-center'>
                                <td>Toplam : </td>
                                <td>{sumSendMeter.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} mt</td>
                                <td>{sumSendPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} tl</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    )
                }

            </table>

            <h2 className='bg-green-700 my-2 text-sm pl-2 text-center'>Alınan Para Tablosu</h2>
            <table className='border border-gray-300 w-full'>
                <thead className='bg-gray-300'>
                    <tr className='text-black divide-x text-sm divide-gray-900 text-center'>
                        <td>Açıklama</td>
                        <td>Alınan Miktar</td>
                        <td>Tarih</td>
                        <td>İşlem</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredMoney.map(item => (
                            <tr key={item._id} className='text-center text-sm divide-x'>
                                <td>{item.description}</td>
                                <td>{item.receivedMoney} tl</td>
                                <td>{moment(item.date).format('L')}</td>
                                <td onClick={() => handleDelete("money", item._id)}><Sil /></td>
                            </tr>
                        ))
                    }
                </tbody>
                {
                    data.length > 0 && (
                        <tfoot>
                            <tr className='bg-white text-black text-sm text-center'>
                                <td>Toplam : </td>
                                <td>{sumReceivedMoney.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} tl</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    )
                }
            </table>
        </>
    )
}

export default Table