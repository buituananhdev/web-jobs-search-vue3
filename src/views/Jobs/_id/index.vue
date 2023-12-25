<template>
    <div class="bg-[#f4f4f4] p-[40px] mt-40px rounded-lg h-[100vh] w-full overflow-hidden h-fit">
        <div class="p-[40px] max-w-[1000px] m-auto mt-40px rounded-2xl bg-white overflow-hidden">
            <h2 class="title text-2xl w-full text-[#009643] font-bold mb-12">Thông tin công việc</h2>
            <form
                method="POST"
                action="applicants"
                class="flex flex-col gap-[16px] job-inf p-8 rounded-lg bg-[white] w-full mb-10"
            >
                <h4 class="text-xl font-bold text-[#263a4d]">{{ job.title }}</h4>
                <input type="number" hidden="hidden" value="= job.getJobId()%>" name="jobId" id="jobId" />
                <div class="job-content flex gap-5 mb-2">
                    <b>Công ty:</b>
                    <p>{{ job.company }}</p>
                </div>
                <div class="job-content flex gap-10 py-1 mb-4">
                    <div class="job-salary px-3 py-2 flex gap-[16px] items-center">
                        <img src="@/assets/icons/icn_money.svg" alt="salary" />
                        <div>
                            <p>Mức lương:</p>
                            <p class="font-semibold">{{ job.salary }}</p>
                        </div>
                    </div>
                    <div class="job-location px-3 py-2 flex gap-[16px] items-center">
                        <img src="@/assets/icons/icn_address.svg" alt="adress" />
                        <div>
                            <p>Địa điểm:</p>
                            <p>{{ job.address }}</p>
                        </div>
                    </div>
                </div>
                <button
                    class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#009634] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1 text-white"
                >
                    Đăng nhập để ứng tuyển
                </button>
                <!-- <div
                class="button-applied flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-white leading-6 capitalize duration-100 transform rounded-lg cursor-pointer sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 text-[#009634]"
            >
                Đã ứng tuyển
            </div>
            <button
                type="submit"
                class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#009643] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1 text-white"
            >
                Ứng tuyển
            </button> -->
            </form>
            <div class="job-inf p-8 rounded-lg bg-[white] mb-8 flex flex-col gap-[20px]">
                <h4 class="req-title text-xl border-[#00b14f] border-s-[6px] font-bold pl-2">
                    Chi tiết tin tuyển dụng
                </h4>
                <div class="job-inf-description pl-4">
                    <b>Mô tả công viêc</b>
                    <p class="pl-4">= job.getDescription()%></p>
                </div>
                <div class="job-inf-requirement pl-4">
                    <b>Yêu cầu công việc:</b>
                    <p class="pl-4">= job.getRequirements()%></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
// import { useRoute } from 'vue-router'
// const jobId = useRoute().params.id
const job = ref({
    id: 2,
    title: 'Data Analyst',
    company: 'FPT Software',
    salary: '60.000 ₫',
    address: 'Hà Nội',
})
</script>
