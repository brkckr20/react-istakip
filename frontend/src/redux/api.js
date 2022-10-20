/* import axios from 'axios';

axios.interceptors.request.use(function (config) {

    //istek yaptığımız end point bizim base endpointimiz ise header'a eklemeler yapabilmek içinss
    const { origin } = new URL(config.url);
    const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT] // hangi endpointlere istek yapılırken eklenmeli kısmı
    const token = localStorage.getItem("is_takip");
    if (allowedOrigins.includes(origin)) {
        config.headers.authorization = token
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
}); */