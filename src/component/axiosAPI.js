import axios from 'axios'

// const baseURL = 'http://loaclhost:8000/api';
const baseURLNasa = 'https://api.nasa.gov/planetary/';
const api_key = "Z55BDJ6VkLtUBCbcsBg7FXR2NCPnlqqFhSYEVr6e";

const axiosNasa = axios.create({
    baseURL: baseURLNasa,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
    params: {
        'api_key': api_key
    }
})

export default axiosNasa;