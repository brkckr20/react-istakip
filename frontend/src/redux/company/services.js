import axios from "axios";

export const save = async (input) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/company`, input);
    return data
}

export const getAll = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/company`);
    return data
}