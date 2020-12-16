import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8OF7_IqDazrBqlLxckVRRZQ8M8vZyiP5C52g2hKqIDg'
    }
});