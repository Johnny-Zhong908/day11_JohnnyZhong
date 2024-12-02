import axios from "axios";

const API_URL = "https://67495c87868020296630ab65.mockapi.io/todo/TodoItems";
const instance = axios.create({
    baseURL:API_URL
});
instance.interceptors.request.use((config)=>{
    config.metadata = {StartTime:new Date()}
        console.log("Request:",config);
        return config;
    },
    (error) =>{
        console.error("Request Error",error);
        return Promise.reject(error);
    });

instance.interceptors.response.use((response) =>{
        const duration = new Date() - response.config.metadata.StartTime;
        console.log("Response:",response);
        console.log(`Response time: ${duration}ms`);
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 500) {
            window.location.href = "/hardstop";
        }
        if (error.response && error.response.status === 404) {
            window.location.href = "/notfound";
        }
        console.error("Response Error", error);
        return Promise.reject(error);
    });

export default instance;
