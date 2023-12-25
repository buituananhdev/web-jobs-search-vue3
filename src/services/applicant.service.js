import axiosApiInstance from '@/plugins/api'
export const getApplicantsApi = async () => {
    return await axiosApiInstance.get('/applicants')
}
export const updateApplicantApi = async (id, data) => {
    delete data.id
    delete data.isEmailVerified
    delete data.balance
    return await axiosApiInstance.patch(`/applicants/${id}`, data)
}
export const changeBalance = async (applicantID, balance) => {
    return await axiosApiInstance.patch(`/applicants/${applicantID}/change-balance`, { balance: balance })
}
export const deleteApplicant = async (id) => {
    return await axiosApiInstance.delete(`/applicants/${id}`)
}
export const getAllApplicants = async () => {
    return await axiosApiInstance.get('/applicants')
}
export const updateApplicant = async (id, newApplicant) => {
    return await axiosApiInstance.put(`/applicants/${id}`, newApplicant)
}
export const getSingleApplicant = async (id) => {
    return await axiosApiInstance.get(`/applicants/${id}`)
}
export const addApplicant = async (newApplicant) => {
    return await axiosApiInstance.post(`/applicants`, newApplicant)
}
export const getApplicantsByCandidateId = async (id) => {
    return await axiosApiInstance.get(`/applicants/candidate/${id}`)
}
