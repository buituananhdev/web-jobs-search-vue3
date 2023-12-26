<template>
    <div class="bg-[#f4f4f4] p-[40px] mt-40px rounded-lg min-h-[100vh] w-full h-fit">
        <div class="h-full p-[40px] max-w-[1000px] m-auto mt-40px rounded-2xl h-[100vh] bg-white h-fit">
            <div class="flex items-center justify-between pb-10">
                <h2 class="title text-2xl w-full text-[#009643] font-bold">Danh sách các bài đăng tuyển dụng</h2>
                <button
                    class="flex flex-row items-center justify-center min-w-[100px] p-2 text-sm font-bold bg-[#00b14f] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 hover:shadow-lg hover:-translate-y-1 text-white"
                    @click="goToCreateJob"
                >
                    Thêm job
                </button>
            </div>
            <div v-show="isEmpty" class="w-full flex flex-col justify-center items-center">
                <img class="w-[400px]" src="@/assets/icons/not-found.svg" />
                <p class="text-[grey]">Không có dữ liệu</p>
            </div>
            <div class="list-job overflow-auto h-[650px] p-[20px]">
                <div
                    v-for="job in listJobs"
                    :key="job.id"
                    class="flex flex-col gap-[16px] job-inf p-8 rounded-lg bg-[white] w-full mb-10"
                >
                    <job-detail :job="job" />
                    <hr />
                    <div class="flex justify-between items-center">
                        <div class="flex gap-5 items-center">
                            <span class="text-[#3b78dc] cursor-pointer" @click="viewJob(job.job_id)">View Job</span>
                            <span class="text-[#009643] cursor-pointer" @click="viewCandidate(job.job_id)">View Candidates</span>
                        </div>
                        <div class="flex gap-4">
                            <button
                                class="py-2 px-4 rounded-lg bg-[#009643] text-white hover:shadow-lg hover:-translate-y-1 capitalize duration-100 transform"
                                @click="updateJob(job.job_id)"
                            >
                                Cập nhật
                            </button>
                            <button
                                class="py-2 px-6 rounded-lg border-[1.5px] border-[#009643] hover:shadow-lg hover:-translate-y-1 capitalize duration-100 transform"
                                @click="deleteJobById(job.job_id)"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { deleteJob, getAllJobsByCompanyId } from '@/services/job.service'
import { getCompanyApi } from '@/services/company.service'
import { useNotification } from '@kyvg/vue3-notification'

const notification = useNotification()
const router = useRouter()
const listCompanies = ref([])
const listJobs = ref([])
const isEmpty = ref(true)
const getListJobs = async () => {
    try {
        const id = localStorage.getItem('entity_id')
        const res = await getAllJobsByCompanyId(id)
        listJobs.value = res.data.jobs
        if (listJobs.value) {
            isEmpty.value = false
        }
        listJobs.value.map(
            (company) =>
                (company.company_name = listCompanies.value.find(
                    (company) => company.company_id === company.company_id
                ).name)
        )
    } catch (error) {
        console.error(error)
    }
}
const getListCompanies = async () => {
    try {
        const res = await getCompanyApi()
        listCompanies.value = res.data.getListCompanies
    } catch (error) {
        console.error(error)
    }
}
const updateJob = (id) => {
    router.push(`/jobs/${id}`)
}
const deleteJobById = async (id) => {
    try {
        await deleteJob(id)
        notification.notify({
            type: 'success',
            title: 'Xóa thành công',
        })
        listJobs.value = listJobs.value.filter((item) => item.job_id !== id)
        if (listJobs.value.length > 0) {
            isEmpty.value = false
        } else {
            isEmpty.value = true
        }
    } catch (error) {
        console.error(error)
        notification.notify({
            type: 'error',
            title: 'Xóa thất bại',
        })
    }
}
const goToCreateJob = () => {
    router.push({ name: 'createjob' })
}
const viewJob = async (id) => {
    router.push(`/jobs/detail/${id}`)
}
const viewCandidate = (id) => {
    router.push(`/candidates/${id}`)
}
onMounted(() => {
    getListCompanies()
    getListJobs()
})
</script>
