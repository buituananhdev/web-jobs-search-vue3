<template>
    <div class="bg-[#f4f4f4] p-[40px] mt-40px rounded-lg h-[100vh] w-full h-fit">
        <div class="h-full p-[40px] max-w-[1000px] m-auto mt-40px rounded-2xl h-[100vh] bg-white h-fit">
            <div class="flex items-center justify-between pb-10">
                <h2 class="title text-2xl w-full text-[#009643] font-bold">Công việc đã ứng tuyển</h2>
                <button
                    class="flex flex-row items-center justify-center min-w-[100px] p-2 text-sm font-bold bg-[#00b14f] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 hover:shadow-lg hover:-translate-y-1 text-white"
                    @click="goToCreateJob"
                >
                    Thêm job
                </button>
            </div>
            <div v-show="!listApplicants">Chưa có đơn đăng kí</div>
            <div class="list-job overflow-auto h-[650px] p-[20px]">
                <div
                    v-for="applicant in listApplicants"
                    :key="applicant.id"
                    class="flex flex-col gap-[16px] job-inf p-8 rounded-lg bg-[white] w-full mb-10"
                >
                    <job-detail :job="applicant" />
                    <hr />
                    <div class="flex justify-between items-center">
                        <div class="text-[#6f7882]">Trạng thái: <span class="text-[#3b78dc]">Đã ứng tuyển</span></div>
                        <span class="text-[#3b78dc]" @click="viewJob(applicant.id)">View</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const listApplicants = ref([
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
const goToCreateJob = () => {
    router.push({ name: 'createjob' })
}
const viewJob = async (id) => {
    router.push(`/jobs/detail/${id}`)
}
</script>
