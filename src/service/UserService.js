import Http from "../util/Http";

const apiUrl = 'https://leega-store-api.vercel.app/api'

export const Test = (data) => {
    return Http.get(`${apiUrl}/test`, data)
}