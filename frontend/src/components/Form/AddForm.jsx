import React, { useState } from 'react';
import { Arti } from '../Icon'
import { useSelector, useDispatch } from 'react-redux';
import { productSave } from '../../redux/product/productSlice';
import Toast, { error, success } from '../../components/Toast';

const AddForm = () => {

    const [meter, setMeter] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [date, setDate] = useState("");
    const [company, setCompany] = useState("");

    const { companies } = useSelector(state => state.company);
    const dispatch = useDispatch();

    const values = {
        meter,
        unitPrice,
        date,
        company
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!meter || !unitPrice || !date || !company) {
            error("Lütfen tüm alanları doldurunuz!");
            return
        } else {
            dispatch(productSave(values));
            success("Kayıt işlemi başarıyla gerçekleşti..")
            setMeter("");
            setUnitPrice("");
            setDate("");
            setCompany("");
        }
    }


    return (
        <div className='w-full'>
            <div className='mb-2'>
                <h3 className='uppercase text-white text-center text-2xl'>Bez ekleme formu</h3>
            </div>
            <Toast />
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                        <div>
                            <input type="text" name='meter' className='w-full outline-none p-1 pl-2 rounded-sm' value={meter} onChange={(e) => setMeter(e.target.value)} placeholder='Ürün Metresi' />
                        </div>
                        <div>
                            <input type="text" name="unitPrice" className='w-full outline-none p-1 pl-2 rounded-sm' value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} placeholder='Ürün Birim Fiyat' />
                        </div>
                        <div>
                            <input type="date" name='date' className='w-full outline-none p-1 pl-2 rounded-sm' value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div>
                            <select className='w-full outline-none p-1 pl-2 rounded-sm' name='company' onChange={(e) => setCompany(e.target.value)} >
                                <option>Firma Seçiniz</option>
                                {companies?.map(item => (
                                    <option key={item._id} value={item.slug}>{item.name}</option>
                                ))}
                            </select>
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