<template>
    <div class="bg-[#f4f4f4] p-[40px] mt-40px rounded-lg h-[100vh] w-full h-fit">
        <div class="h-full p-[40px] max-w-[1000px] m-auto mt-40px rounded-2xl h-[100vh] bg-white h-fit">
            <div class="flex items-center justify-between pb-10">
                <h2 class="title text-2xl w-full text-[#009643] font-bold">Công việc đã ứng tuyển</h2>
                <button
                    class="flex flex-row items-center justify-center min-w-[100px] p-2 text-sm font-bold bg-[#00b14f] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 hover:shadow-lg hover:-translate-y-1 text-white"
                    @click="goToCreateJob">
                    Thêm job
                </button>
            </div>
            <div v-show="!listJobs">Chưa có đơn đăng kí</div>
            <div class="list-job overflow-auto h-[650px] p-[20px]">
                <div v-for="job in listJobs" :key="job.id"
                    class="flex flex-col gap-[16px] job-inf p-8 rounded-lg bg-[white] w-full mb-10">
                    <job-detail :job="job" />
                    <hr />
                    <div class="flex justify-between items-center">
                        <span class="text-[#3b78dc]" @click="viewJob(job.id)">View</span>
                        <div class="flex gap-4">
                            <button
                                class="py-2 px-4 rounded-lg bg-[#009643] text-white hover:shadow-lg hover:-translate-y-1 capitalize duration-100 transform"
                                @click="updateJob(job.id)">
                                Cập nhật
                            </button>
                            <button
                                class="py-2 px-6 rounded-lg border-[1.5px] border-[#009643] hover:shadow-lg hover:-translate-y-1 capitalize duration-100 transform"
                                @click="deleteJobById(job.id)">
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { deleteJob } from '@/services/job.service'
import { useNotification } from '@kyvg/vue3-notification'

const notification = useNotification()
const router = useRouter()
const listJobs = ref([
    {
        id: 1,
        title: 'Data Analyst',
        company: 'FPT Software',
        salary: '60.000 ₫',
        address: 'Hà Nội',
    },
    {
        id: 2,
        title: 'Data Analyst',
        company: 'FPT Software',
        salary: '60.000 ₫',
        address: 'Hà Nội',
    },
    {
        id: 3,
        title: 'Data Analyst',
        company: 'FPT Software',
        salary: '60.000 ₫',
        address: 'Hà Nội',
    },
    {
        id: 4,
        title: 'Data Analyst',
        company: 'FPT Software',
        salary: '60.000 ₫',
        address: 'Hà Nội',
    },
])
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
</script>
