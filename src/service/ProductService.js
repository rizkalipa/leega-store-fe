import Http from "../util/Http";

const apiUrl = 'https://leega-store-api.vercel.app/api'

export const getProducts = (data) => {
    return Http.get(`${apiUrl}/product`, data)
}

export const showProduct = (id, data) => {
    return Http.get(`${apiUrl}/product/${id}`, data)
}

export const getBestSellerProduct = (data) => {
    return Http.get(`${apiUrl}/product/best-seller`, data)
}