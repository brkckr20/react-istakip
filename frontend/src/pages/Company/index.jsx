import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { /* saveCompany, */ getAllCompany, createCompany, removeCompany } from '../../redux/company/companySlice'
import { Sil } from '../../components/Icon';

const Company = () => {

    const [firma, setFirma] = useState("");
    const user = useSelector(state => state.auth.user);
    const { companies, isLoading } = useSelector(state => state.company);
    const dispatch = useDispatch();

    const values = {
        name: firma,
        user: user._id
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCompany(values));
        setFirma("");
    }

    const handleDelete = (id) => [
        dispatch(removeCompany(id))
    ]

    useEffect(() => {
        dispatch(getAllCompany());
        // eslint-disable-next-line
    }, [companies])

    return (
        <div className='px-2 mx-auto'>
            <div className='text-white text-xl md:text-3xl mb-3'>
                <h1>Firma Ekleme Paneli</h1>
            </div>
            <form className='max-w-[414px]' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label className='text-white'>Firma Adı</label>
                    <input type="text" placeholder='Firma adı giriniz' value={firma} onChange={(e) => setFirma(e.target.value)} className='p-1 outline-none rounded-sm' />
                </div>
                <div className='mt-2 text-right'>
                    <button className='bg-blue-500 hover:bg-blue-600 duration-300 text-white p-2 rounded-md'>Kaydet +</button>
                </div>
            </form>
            <div className='mt-5'>
                <h2 className='text-white text-xl md:text-3xl'>Mevcut Firma Listesi</h2>
                {
                    isLoading && (
                        <div className='text-white'>Yükleniyor</div>
                    )
                }
                <table className='border-collapse border border-slate-400 mb-2 md:mb-0 w-full max-w-[414px]'>
                    <thead>
                        <tr className='bg-gray-400  text-center'>
                            <td>Sıra</td>
                            <td>Firma Adı</td>
                            <td>İşlem</td>
                        </tr>
                    </thead>
                    <tbody>
                        {companies?.map((item, i) => (
                            <tr key={item._id} className='text-center text-white bg-gray-700'>
                                <td className='border border-slate-300'>{i + 1}</td>
                                <td className='border border-slate-300'>{item.name}</td>
                                <td className='border border-slate-300 flex items-center justify-center'><span onClick={() => handleDelete(item._id)}><Sil /></span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Company