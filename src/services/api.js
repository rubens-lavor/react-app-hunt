import axios from "axios";

const api = axios.create({ 
    baseURL: "https://rest-api-hunt.herokuapp.com/api" 
});

export default api;
