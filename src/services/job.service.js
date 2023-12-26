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
export const getAllJobs = async (filter) => {
    let url = `/jobs?key_word=${filter.key_word}&company_id=${filter.company_id}&salary=${filter.salary}&location=${filter.location}`
    if (filter.key_word) {
        url += `&key_word =${filter.key_word}`
    }
    if (filter.location !== 'all') {
        url += `&location =${filter.location}`
    }
    if (filter.salary !== '0') {
        url += `&salary =${filter.salary}`
    }
    if (filter.company_id > 0) {
        url += `company_id=${filter.company_id}`
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
export const getCandidateByJobId = async (id) => {
    return await axiosApiInstance.get(`/jobs/${id}/candidates`)
}
