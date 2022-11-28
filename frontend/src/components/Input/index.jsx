import React from 'react'

const Input = ({ type = "text", onChange, name, placeholder, value, disabled }) => {
    return (
        <input className='max-w-[180px] w-full mb-2 rounded-sm pl-1 py-1 outline-none text-sm disabled:bg-white/80'
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
        />

    )
}

export default Input