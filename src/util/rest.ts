import request from './request'

export const createPayment = async (body: object) => {
    return request.post('/pay', body)
}