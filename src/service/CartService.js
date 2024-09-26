import Http from "../util/Http";

const apiUrl = 'https://leega-store-api.vercel.app/api'

export const getCarts = (data) => {
    return Http.get(`${apiUrl}/cart`, data)
}

export const saveToCart = (data) => {
    return Http.post(`${apiUrl}/cart`, data)
}

export const deleteCart = (data) => {
    return Http.post(`${apiUrl}/cart/delete`, data)
}

