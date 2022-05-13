import request from './request'

export const createPayment = async (body: BodyInit) => {
    return request.post('/pay', body)
}