import axiosApiInstance from '@/plugins/api'
export const getJobsApi = async () => {
    return await axiosApiInstance.get('/jobs')
}
export const updateJobApi = async (id, data) => {
    delete data.id
    delete data.isEmailVerified
    delete data.balance
    return await axiosApiInstance.patch(`/jobs/${id}`, data)
}
export const changeBalance = async (jobID, balance) => {
    return await axiosApiInstance.patch(`/jobs/${jobID}/change-balance`, { balance: balance })
}
export const deleteJob = async (id) => {
    return await axiosApiInstance.delete(`/jobs/${id}`)
}
export const getAllJobs = async (company_id, key_word, location = 'all', salary = '0') => {
    let url = `/jobs?key_word=${key_word}&company_id=${company_id}&salary=${salary}&location=${location}`
    if (key_word) {
        url += `&key_word =${key_word}`
    }
    if (location !== 'all') {
        url += `&location =${location}`
    }
    if (salary !== '0') {
        url += `&salary =${salary}`
    }
    if (company_id > 0) {
        url += `company_id=${company_id}`
    }
    return await axiosApiInstance.get(url)
}
export const updateJob = async (id, newJob) => {
    return await axiosApiInstance.put(`/jobs/${id}`, newJob)
}
export const getSingleJob = async (id) => {
    return await axiosApiInstance.get(`/jobs/${id}`)
}
export const addJob = async (newJob) => {
    return await axiosApiInstance.post(`/jobs`, newJob)
}
export const getAllJobsByCompanyId = async (company_id) => {
    return await axiosApiInstance.get(`/jobs/company/${company_id}`)
}
