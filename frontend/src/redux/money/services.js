import axios from "axios";

export const saveMoney = async (inputValue) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/money`, inputValue);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getMoney = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/money`);
        return data;
    } catch (error) {
        console.log(error)
    }
}