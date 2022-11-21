import axios from 'axios';

export const login = async (input) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users/login`, input);
        if (data) {
            localStorage.setItem('is_takip', JSON.stringify(data));
        }
        return data;
    } catch (error) {
        return error.response.data.message;
    }
}

export const register = async (input) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users/register`, input);
        return data;
    } catch (error) {
    }
}

export const logout = async () => {
    localStorage.removeItem("is_takip");
}