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
    }

    post(url, data) {
        let headers = {}

        if (data.file) {
            const formData = new FormData()
            headers['Content-Type'] = 'multipart/form-data'
            Object.keys(data).forEach((v) => {
                formData.append(v, data[v])
            })
            data = formData
        } else {
            headers['Content-Type'] = 'application/json'
            data = JSON.stringify(data)
        }

        return axios({
            method: 'post',
            url,
            data
        })
    }

    delete(url, data) {
        let query = ''

        if (Object.keys(data).length) {
            query = Object.keys(data)
                .map(k => `${esc(k)}=${esc(data[k])}`)
                .join('&')

            url = `${url}?${query}`
        }

        const response = axios({
            method: 'delete',
            url
        })

        response.catch(() => {
            return false
        })

        return response
    }
}

export default new Http();