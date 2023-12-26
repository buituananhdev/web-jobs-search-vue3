<template>
    <div class="bg-[#f4f4f4] p-[40px] mt-40px rounded-lg h-[100vh] w-full h-fit">
        <div class="h-full p-[40px] max-w-[1000px] m-auto mt-40px rounded-2xl h-[100vh] bg-white h-fit">
            <div class="flex items-center justify-between pb-10">
                <h2 class="title text-2xl w-full text-[#009643] font-bold">Công việc đã ứng tuyển</h2>
            </div>
            <div v-if="isEmpty" class="w-full h-[70vh] flex flex-col justify-center items-center">
                <img class="w-[400px]" src="@/assets/icons/not-found.svg" />
                <p>Bạn chưa đăng kí đơn nào</p>
            </div>
            <div v-else class="list-job overflow-auto h-[650px] p-[20px]">
                <div
                    v-for="applicant in listApplicants"
                    :key="applicant.id"
                    class="flex flex-col gap-[16px] job-inf p-8 rounded-lg bg-[white] w-full mb-10"
                >
                    <job-detail :job="applicant" />
                    <hr />
                    <div class="flex justify-between items-center">
                        <div class="text-[#6f7882]">Trạng thái: <span class="text-[#3b78dc]">Đã ứng tuyển</span></div>
                        <span class="text-[#3b78dc]" @click="viewJob(applicant.job_id)">View</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getApplicantsByCandidateId } from '@/services/applicant.service'
import { getSingleJob } from '@/services/job.service'

const router = useRouter()
const listApplicants = ref([])
const listData = ref([])
const isEmpty = ref(false)
const getListApplicants = async () => {
    try {
        const id = localStorage.getItem('entity_id')
        const res = await getApplicantsByCandidateId(id)
        if (res) {
            isEmpty.value = false
            listData.value = res.data.applicants.map((item) => item.job_id)
            await getJobsAll(listData.value)
        } else {
            isEmpty.value = true
        }
    } catch (error) {
        console.error(error)
    }
}
const getJobsAll = async (listId) => {
    try {
        for (const jobId of listId) {
            const res = await getSingleJob(jobId)
            const jobDetails = res.data
            listApplicants.value.push(jobDetails)
        }
    } catch (error) {
        console.error(error)
    }
}
const viewJob = async (id) => {
    router.push(`/jobs/detail/${id}`)
}
onMounted(() => {
    getListApplicants()
})
</script>
