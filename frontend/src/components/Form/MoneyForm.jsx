import React from 'react'
import { Arti } from '../Icon'
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

const MoneyForm = () => {
    const { companies } = useSelector(state => state.company);
    const money = useSelector(state => state.money);

    const formik = useFormik({
        initialValues : {
            receivedMoney : '',
            description : '',
            date : "",
            company : ""
        },
        onSubmit : (values) => {
            console.log(values);
        }
    })

    return (
        <div className='w-full md:pl-2'>
            <div className='mb-2'>
                <h3 className='uppercase text-white text-center text-2xl'>Alınan para formu</h3>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                        <div>
                            <input type="text" name='receivedMoney' value={formik.values.receivedMoney} onChange={formik.handleChange} className='w-full outline-none p-1 pl-2 rounded-sm' placeholder='Alın Miktar' />
                        </div>
                        <div>
                            <input type="text" name='description' value={formik.values.description} onChange={formik.handleChange} className='w-full outline-none p-1 pl-2 rounded-sm' placeholder='Açıklama' />
                        </div>
                        <div>
                            <input type="date" name='date' value={formik.values.date} onChange={formik.handleChange} className='w-full outline-none p-1 pl-2 rounded-sm' />
                        </div>
                        <div>
                            <select name='company' value={formik.values.company} onChange={formik.handleChange} className='w-full outline-none p-1 pl-2 rounded-sm'>
                                <option disabled>Firma Seçiniz</option>
                                {companies?.map(item => (
                                    <option key={item._id} value={item.slug}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className='bg-amber-700 hover:bg-amber-800 transition-colors md:px-2 md:py-2 px-1 py-1 rounded-sm mt-2 text-white w-auto flex items-center'><span>Kaydet</span> <Arti /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MoneyForm