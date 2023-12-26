<template>
    <div class="bg-[#f4f4f4] p-[40px] mt-40px rounded-lg h-[100vh] w-full overflow-hidden h-fit">
        <div class="p-[40px] max-w-[1000px] m-auto mt-40px rounded-2xl bg-white overflow-hidden">
            <h2 class="title text-2xl w-full text-[#009643] font-bold mb-12">Thông tin công việc</h2>
            <div class="flex flex-col gap-[16px] job-inf p-8 rounded-lg bg-[white] w-full mb-10">
                <job-detail :job="job" />
                <button
                    v-if="!isLoggedIn"
                    class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#009634] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1 text-white"
                    @click="applyJob"
                >
                    Đăng nhập để ứng tuyển'
                </button>
                <button
                    v-else-if="role === 'candidate'"
                    class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1"
                    :class="{ 'bg-[#009634] text-white': !isApplied, 'bg-[white] text-[#009634]': isApplied}"
                    @click="applyJob"
                >
                    {{ isApplied ? 'Đã ứng tuyển' : 'Ứng tuyển' }}
                </button>
                <hr v-else />
            </div>
            <div class="job-inf p-8 rounded-lg bg-[white] mb-8 flex flex-col gap-[20px]">
                <h4 class="req-title text-xl border-[#00b14f] border-s-[6px] font-bold pl-2">
                    Chi tiết tin tuyển dụng
                </h4>
                <div class="job-inf-description pl-4">
                    <b>Mô tả công việc:</b>
                    <p class="pl-4">{{ job.description }}</p>
                </div>
                <div class="job-inf-requirement pl-4">
                    <b>Yêu cầu công việc:</b>
                    <p class="pl-4">{{ job.requirements }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { addApplicant, getApplicantsByCandidateId } from '@/services/applicant.service'
import { useRoute } from 'vue-router'
import router from '@/router'
import { getSingleJob } from '@/services/job.service'
import { getCompanyApi } from '@/services/company.service'

// const jobId = useRoute().params.id

const route = useRoute()
const role = localStorage.getItem('role')
const isLoggedIn = ref(false)
isLoggedIn.value = Boolean(localStorage.getItem('access_token'))
const job = ref({})
const applicant = ref({})
const listCompanies = ref([])
const listJobIdApplied = ref([])
const id = parseInt(route.params.id)
const isApplied = ref(false)
const getJob = async () => {
    try {
        const res = await getSingleJob(id)
        job.value = res.data
        job.value.company_name = listCompanies.value.find((company) => company.company_id === job.value.company_id).name
    } catch (error) {
        console.error(error)
    }
}
const applyJob = async () => {
    try {
        if (isLoggedIn.value) {
            applicant.value.job_id = id
            applicant.value.candidate_id = parseInt(localStorage.getItem('entity_id'))
            console.log('applicant', applicant.value)
            await addApplicant(applicant.value)
            router.push('/applicants')
        } else {
            router.push('/login')
        }
    } catch (error) {
        console.error(error)
    }
}
const getListCompanies = async () => {
    try {
        const res = await getCompanyApi()
        listCompanies.value = res.data.companies
    } catch (error) {
        console.error(error)
    }
}
const getlistJobIdApplied = async () => {
    try {
        const entity_id = localStorage.getItem('entity_id')
        const res = await getApplicantsByCandidateId(entity_id)
        console.log('res', res)
        listJobIdApplied.value = res.data.applicants.map((applicant) => applicant.job_id)
    } catch (error) {
        console.error(error)
    }
}
const checkApplied = async () => {
    await getlistJobIdApplied()
    console.log('listJobIdApplied.value', listJobIdApplied.value)
    isApplied.value = Boolean(listJobIdApplied.value.find((item) => item === id))
    console.log('isApplied.value', isApplied.value)
}
onMounted(() => {
    getListCompanies()
    getJob()
    checkApplied()
})
</script>
