import axios from 'axios';

const esc = encodeURIComponent

class Http {
    get = (url, data) => {
        let query = ''

        if (Object.keys(data).length) {
            query = Object.keys(data)
                .map(k => `${esc(k)}=${esc(data[k])}`)
                .join('&')

            url = `${url}?${query}`
        }
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };

        return axios({
            method: 'get',
            url,
            headers
        });
    };
}

export default new Http();