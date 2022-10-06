import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const error = (message) => toast.error(message);


const Toast = () => {
    return (
        <ToastContainer />
    )
}

export default Toast