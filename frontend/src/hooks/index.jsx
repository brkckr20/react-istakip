import { useState, useEffect } from 'react'
import axios from "axios";

const usePost = (url, input) => {
    const postData = async () => {
        try {
            const { data } = await axios.post(url, input);
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return {
        postData
    }
}

const useFetch = (URL) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(URL);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setError(err.message)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        data,
        loading,
        error
    }
}

export {
    usePost,
    useFetch
}