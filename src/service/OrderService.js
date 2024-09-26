import Http from "../util/Http";

const apiUrl = 'https://leega-store-api.vercel.app/api'

export const getOrder = (data) => {
    return Http.get(`${apiUrl}/order`, data)
}

export const checkoutOrder = (data) => {
    return Http.post(`${apiUrl}/order/checkout`, data)
}

