import React from 'react'
import Input from '../../components/Input';
import { useFormik } from 'formik';
import { usePost } from '../../hooks'



const AddProductForm = ({ slug, success }) => {

    const { postData } = usePost()

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            meter: '',
            unitPrice: '',
            date: '',
            company: slug
        },
        onSubmit: (values, bag) => {
            postData(`${process.env.REACT_APP_BASE_ENDPOINT}/product`, values);
            bag.resetForm();
            success("Ürün kayıt işlemi başarıyla tamamlandı...")

        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 text-center'>
                <div>
                    <Input placeholder="Ürün Metresi" name="meter" value={values.meter} onChange={handleChange} />
                </div>
                <div>
                    <Input placeholder="Birim Fiyat" name="unitPrice" value={values.unitPrice} onChange={handleChange} />
                </div>
                <div>
                    <Input type='date' name="date" value={values.date} onChange={handleChange} />
                </div>
                <div>
                    <Input disabled={true} value={slug} />
                </div>
            </div>
            <div>
                <button type='submit' className='bg-green-600 hover:bg-green-800 duration-300 text-white p-[6px] ml-2 rounded-sm'>Kaydet</button>
            </div>
        </form>
    )
}

export default AddProductForm