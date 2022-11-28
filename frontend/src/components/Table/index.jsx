import React from 'react';
import moment from 'moment';
import trLocale from 'moment/locale/tr'
import { Sil } from '../Icon';
import { useDelete } from '../../hooks';

const Table = ({ data }) => {

    React.useEffect(() => {
        moment.updateLocale("tr", trLocale);
    }, [])

    const { deleteData } = useDelete();

    const handleDelete = (id) => {
        deleteData(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`);
    }

    return (
        <table className='border border-gray-300 w-full'>
            <thead className='bg-gray-300'>
                <tr className='text-black divide-x divide-gray-900 text-center'>
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
                        <tr key={item._id} className='text-center divide-x'>
                            <td>{item.unitPrice} tl</td>
                            <td>{item.meter} mt</td>
                            <td>{item.unitPrice * item.meter} tl</td>
                            <td>{moment(item.date).format('L')}</td>
                            <td onClick={() => handleDelete(item._id)}><Sil /></td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}

export default Table