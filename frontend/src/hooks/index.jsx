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

export {
    usePost
}