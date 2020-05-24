import axios from 'axios';

const token = localStorage.getItem("token");
if (!token) console.log("there is no token");

const $axios = axios.create({
    baseURL: "https://webdev-api.loftschool.com",
    headers: {
        "Authorization": `Bearer ${token}`
    }

});

export default $axios;