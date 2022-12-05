import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks'
import Table from '../../components/Table';
import Toast, { success, error as errmsg } from '../../components/Toast';
import AddProductForm from './AddProductForm';
import AddMoneyForm from './AddMoneyForm';
import { ReportIcon } from '../../components/Icon';
import BakiyeCard from '../../components/BakiyeCard';

const CompanyDetail = () => {
    const { slug } = useParams();
    const { data, error, loading } = useFetch(`${process.env.REACT_APP_BASE_ENDPOINT}/product`);
    const { data: moneyData } = useFetch(`${process.env.REACT_APP_BASE_ENDPOINT}/money`);

    const filteredData = data.filter(item => item.company === slug);
    const filteredMoney = moneyData.filter(item => item.company === slug);

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

    function summary() {
        const filteredDatam = data.reduce((acc, object) => {
            return acc + object.amount
        }, 0);
        const sumReceivedMoney = filteredMoney.reduce((acc, object) => {
            return acc + object.receivedMoney
        }, 0);

        return filteredDatam - sumReceivedMoney;

    }


    return (
        <div className='pt-16'>
            <Toast />
            <div className='mx-2'>
                <div className='text-white text-sm mb-2 border-b border-white pb-2'>Gönderilen Ürün Bilgileri Formu ( {slug} )</div>
                <AddProductForm slug={slug} success={success} error={errmsg} />
            </div>
            <div className='mt-2 mx-2'>
                <div className='text-white text-sm mb-2 border-b border-white pb-2'>Alınan Para Bilgileri Formu ( {slug} )</div>
                <AddMoneyForm slug={slug} success={success} error={errmsg} />
            </div>
            <div className='text-white mt-2 mx-2'>
                <Table data={filteredData} filteredMoney={filteredMoney} />
            </div>
            <div className='mx-2'>
                <button className='bg-[#075e54] flex p-2 mt-2 text-white font-semibold'>Rapor
                    <span className='ml-2'><ReportIcon /></span>
                </button>
            </div>
            <div className='mx-2'>
                <h3 className='text-white'>Genel Bakiye Durumu</h3>
                <BakiyeCard summary={summary} />
            </div>
        </div >
    )
}

export default CompanyDetail