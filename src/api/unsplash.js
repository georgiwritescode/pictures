import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5ac26476fdde4a2399bdd45852cd7f177d172a1890007dee17de06b0396ad4a3'
    }
});