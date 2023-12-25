<template>
    <div class="bg-gray-100 p-10 h-full min-h-[90vh]">
        <div>
            <h2 class="text-3xl font-bold text-[#009643] mb-2 text-center">
                Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.
            </h2>
            <p class="text-gray-600 text-center">
                Tiếp cận 40,000+ tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
            </p>
        </div>
        <form class="flex space-x-4 my-4 justify-center" method="get" action=" request.getRequestURI() %>">
            <div class="h-full relative flex items-center rounded-lg">
                <input
                    type="text"
                    name="keyword"
                    placeholder="Vị trí tuyển dụng"
                    id="keyword"
                    autocomplete="off"
                    class="filter-box p-4 rounded border border-gray-300 px-10"
                />
                <img
                    src="@/assets/icons/icn-search.svg"
                    alt=""
                    class="absolute left-4 top-1/2 transform -translate-y-1/2"
                />
            </div>
            <div class="filter-box">
                <select
                    id="search-location"
                    name="search-location"
                    class="w-full h-full border-none border rounded p-4 rounded-lg"
                >
                    <option value="all" disabled selected>Vị trí</option>
                    <option value="all">Toàn quốc</option>
                    <option value=" city %>">city %></option>
                </select>
            </div>
            <div class="filter-box min-w-[200px]">
                <select
                    name="search-salary"
                    id="search-salary"
                    class="w-full h-full border-none border rounded p-4 rounded-lg"
                >
                    <option value="0">Tất cả mức lương</option>
                    <option value="1">Dưới 10 triệu</option>
                    <option value="2">10 - 15 triệu</option>
                    <option value="3">15 - 20 triệu</option>
                    <option value="4">20 - 25 triệu</option>
                    <option value="5">Trên 25 triệu</option>
                </select>
            </div>
            <button
                type="submit"
                class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#00b14f] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1 text-white"
            >
                Tìm kiếm
            </button>
        </form>
        <div id="jobs-grid" class="grid grid-cols-1 md:grid-cols-4 gap-4" style="padding-bottom: 100px">
            <div v-for="job in listJobs" :key="job.id" @click="showDetail">
                <div class="job-card bg-white shadow-md p-4 rounded">
                    <div class="flex flex-col">
                        <span class="title text-blue-900 font-semibold text-lg mb-2">{{ job.title }}</span>
                        <span class="company text-gray-600">{{ job.company }}</span>
                    </div>
                    <div class="flex items-center mt-2">
                        <span class="salary bg-gray-100 px-2 py-1 rounded text-gray-700 mr-2">{{ job.salary }}</span>
                        <span class="location text-gray-700">{{ job.address }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!listJobs" class="w-full h-full flex justify-center items-center">
            <img class="w-[400px]" src="@/assets/icons/not-found.svg" />
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
const isShowDetail = ref(false)
const showDetail = () => {
    isShowDetail.value = true
}
</script>
