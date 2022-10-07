import axios from 'axios';

export const login = async (input) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users/login`, input);
        return data;
    } catch (error) {
        return error.response.data.message;
    }
}