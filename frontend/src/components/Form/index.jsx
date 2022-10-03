import React from 'react'
import AddForm from './AddForm'
import MoneyForm from './MoneyForm'

const index = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-5 gap-2 md:divide-x divide-gray-700'>
            <AddForm/>
            <MoneyForm/>
        </div>
    )
}

export default index