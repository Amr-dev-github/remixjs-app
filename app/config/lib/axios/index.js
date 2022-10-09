import axios from "axios";

const instance = axios.create({
    timeout: 5000,
    withCredentials: true,
});

export default instance