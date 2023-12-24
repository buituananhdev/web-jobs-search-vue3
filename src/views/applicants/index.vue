<template>
    <div class="bg-[#f4f4f4] p-[40px] mt-40px rounded-lg h-[100vh] w-full h-fit">
        <div class="h-full p-[40px] max-w-[1000px] m-auto mt-40px rounded-2xl h-[100vh] bg-white h-fit">
            <h2 class="title text-2xl w-full text-[#009643] font-bold mb-12">Công việc đã ứng tuyển</h2>
            <!-- <h2 class="title text-2xl w-full text-[#009643] font-bold mb-12">Công việc đã tạo</h2> -->
            <div>Chưa có đơn đăng kí</div>
            <div class="list-job overflow-auto h-[650px] p-[20px]">
                <div
                    v-for="job in listJobs"
                    :key="job.id"
                    class="flex flex-col gap-[16px] job-inf p-8 rounded-lg bg-[white] w-full mb-10"
                >
                    <h4 class="text-xl font-bold text-[#263a4d]">{{ job.title }}</h4>
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
                            <img src="@/assets/icons/icn_address.svg" alt="address" />
                            <div>
                                <p>Địa điểm:</p>
                                <p>{{ job.address }}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="text-[#6f7882]">Trạng thái: <span class="text-[#3b78dc]">Đã ứng tuyển</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
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
</script>
