import axiosApiInstance from '@/plugins/api'
export const getCompanyApi = async () => {
    return await axiosApiInstance.get('/companies')
}
