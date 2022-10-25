import axios from "axios";

export const newProduct = async (input) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/product`, input);
        return data
    } catch (err) {
        console.log(err)
    }
}