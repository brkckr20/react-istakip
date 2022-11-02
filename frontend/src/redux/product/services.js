import axios from "axios";

export const newProduct = async (input) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/product`, input);
        return data
    } catch (err) {
        console.log(err)
    }
}

export const getAllProducts = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const removeProduct = async (id) => {
    try {
        const { data } = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`);
        return data
    } catch (err) {
        console.log(err)
    }
}