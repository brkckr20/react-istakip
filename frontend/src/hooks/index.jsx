import { useState, useEffect } from 'react'
import axios from "axios";

const usePost = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const postData = async (url, input) => {
        try {
            const { data: res } = await axios.post(url, input);
            setData(res);
            setLoading(false);
        } catch (err) {
            setError(err.message)
            setLoading(false);
        }
    }

    return {
        postData,
        data,
        error,
        loading
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

        // react-hooks/exhaustive-deps
    }, [data])

    return {
        data,
        loading,
        error
    }
}

const useDelete = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const deleteData = async (url, id) => {
        try {
            const { data: res } = await axios.delete(url, id);
            setData(res);
            setLoading(false);
        } catch (err) {
            setError(err.message)
            setLoading(false);
        }
    }

    return {
        deleteData,
        data,
        error,
        loading
    }
}


export {
    usePost,
    useFetch,
    useDelete
}