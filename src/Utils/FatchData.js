import axios from 'axios';


export async function makeRequest(method, url, data = null, config = {}) {
    try {
        const response = await axios({
            method,
            url,
            data,
            ...config,
        });
        return response.data; 
    } catch (error) {
        console.error('Error making the request:', error);
        throw error;
    }
}

