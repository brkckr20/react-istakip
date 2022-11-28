import Input from '../../components/Input';
import { useParams } from 'react-router-dom';
import { useFetch, usePost } from '../../hooks'
import Table from '../../components/Table';
import { useFormik } from 'formik';
import Toast, { success } from '../../components/Toast';

const CompanyDetail = () => {
    const { slug } = useParams();
    const { data, error, loading } = useFetch(`${process.env.REACT_APP_BASE_ENDPOINT}/product`);
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

    const filteredData = data.filter(item => item.company === slug);

    if (loading) {
        return (
            <div className='bg-white w-full h-screen'>Yükleniyor...</div>
        )
    }

    if (error) {
        return (
            <div className='bg-red-300 w-full h-screen'>Bir hata oluştu...</div>
        )
    }

    return (
        <div className='pt-16 '>
            <Toast />
            <div className='text-white text-sm mb-2 border-b border-white pb-2 mx-2'>Gönderilen Ürün Bilgileri Formu ( {slug} )</div>
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

            <div className='mt-2'>
                <div className='text-white text-sm mb-2 border-b border-white pb-2 mx-2'>Alınan Para Bilgileri Formu ( {slug} )</div>
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
                <Table data={filteredData} />
            </div>
        </div >
    )
}

export default CompanyDetail