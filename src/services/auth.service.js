import axiosApiInstance from '@/plugins/api'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL
export const refreshAccessToken = async () => {
    const refresh_token = localStorage.getItem('refresh_token')
    const data = {
        refreshToken: refresh_token,
    }
    return await axios.post('/refresh-tokens', data)
}
export const loginApi = async (data) => {
    return await axiosApiInstance.post('/login', data)
}
export const getInfo = async () => {
    return await axiosApiInstance.get('/getMe')
}
export const loginGGApi = async (data) => {
    return await axiosApiInstance.post('/login-gg', data)
}
export const registerApi = async (data) => {
    return await axiosApiInstance.post('/register', data)
}
export const getMeApi = async () => {
    return await axiosApiInstance.get('/getMe')
}
