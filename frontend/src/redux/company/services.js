import axios from "axios";
export const getAll = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/company`);
    return data
}
