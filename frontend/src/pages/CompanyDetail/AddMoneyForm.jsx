import React from 'react'
import Input from '../../components/Input';
import { useFormik } from 'formik';
import { usePost } from '../../hooks';



const AddMoneyForm = ({ slug, success, error }) => {

    const { postData } = usePost()

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            receivedMoney: '',
            description: '',
            date: '',
            company: slug
        },

        onSubmit: (values, bag) => {
            if (!values.receivedMoney || !values.description || !values.date) {
                return error("Alanlar boş geçilemez!!!");
            } else {
                postData(`${process.env.REACT_APP_BASE_ENDPOINT}/money`, values);
                bag.resetForm();
                success("Alınan para başarıyla kaydedildi")
            }
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 text-center'>
                <div>
                    <Input placeholder="Alınan Para Miktarı" name="receivedMoney" value={values.receivedMoney} onChange={handleChange} />
                </div>
                <div>
                    <Input placeholder="Açıklama" name="description" value={values.description} onChange={handleChange} />
                </div>
                <div>
                    <Input type='date' name="date" value={values.date} onChange={handleChange} />
                </div>
                <div>
                    <Input disabled={true} name="company" value={slug} />
                </div>
            </div>
            <div>
                <button type='submit' className='bg-blue-600 hover:bg-blue-800 duration-300 text-white p-[6px] ml-2 rounded-sm'>Kaydet</button>
            </div>
        </form>
    )
}

export default AddMoneyForm