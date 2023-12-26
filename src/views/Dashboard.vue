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
        <div class="flex space-x-4 my-4 justify-center">
            <div class="h-full relative flex items-center rounded-lg">
                <input
                    v-model="filter.key_word"
                    type="text"
                    name="keyword"
                    placeholder="Vị trí tuyển dụng"
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
                    v-model="filter.location"
                    name="search-location"
                    class="w-full h-full border-none border rounded p-4 rounded-lg"
                >
                    <option value="all">Tất cả thành phố</option>
                    <option v-for="(city, index) in listCity" :key="index" :value="city">
                        {{ city }}
                    </option>
                </select>
            </div>
            <div class="filter-box min-w-[200px]">
                <select
                    name="search-salary"
                    id="search-salary"
                    class="w-full h-full border-none border rounded p-4 rounded-lg"
                    v-model="filter.salary"
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
                class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#00b14f] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1 text-white"
                @click="getListJobs"
            >
                Tìm kiếm
            </button>
        </div>
        <div v-if="listJobs" id="jobs-grid" class="grid grid-cols-1 md:grid-cols-4 gap-4" style="padding-bottom: 100px">
            <div v-for="job in listJobs" :key="job.job_id" @click="showDetail(job.job_id)">
                <div class="job-card bg-white shadow-md p-4 rounded cursor-pointer">
                    <div class="flex flex-col">
                        <span class="title text-blue-900 font-semibold text-lg mb-2">{{ job.title }}</span>
                        <span class="company text-gray-600">{{ job.company_name }}</span>
                    </div>
                    <div class="flex items-center mt-2">
                        <span class="salary bg-gray-100 px-2 py-1 rounded text-gray-700 mr-2">{{ job.salary }}</span>
                        <span class="location text-gray-700">{{ job.location }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="w-full h-full flex justify-center items-center">
            <img class="w-[400px]" src="@/assets/icons/not-found.svg" />
            <p class="text-[grey]">Không có dữ liệu</p>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getAllJobs } from '@/services/job.service'
import { getCompanyApi } from '@/services/company.service'
import { useRouter } from 'vue-router'

const router = useRouter()

const listCity = [
    'Ho Chi Minh',
    'Hanoi',
    'Danang',
    'Haiphong',
    'An Giang',
    'Ba Ria - Vung Tau',
    'Bac Giang',
    'Bac Kan',
    'Bac Lieu',
    'Bac Ninh',
    'Ben Tre',
    'Binh Dinh',
    'Binh Duong',
    'Binh Phuoc',
    'Binh Thuan',
    'Ca Mau',
    'Can Tho',
    'Cao Bang',
    'Dak Lak',
    'Dak Nong',
    'Dien Bien',
    'Dong Nai',
    'Dong Thap',
    'Gia Lai',
    'Ha Giang',
    'Ha Nam',
    'Ha Tinh',
    'Hai Duong',
    'Hau Giang',
    'Hoa Binh',
    'Hung Yen',
    'Khanh Hoa',
    'Kien Giang',
    'Kon Tum',
    'Lai Chau',
    'Lam Dong',
    'Lang Son',
    'Lao Cai',
    'Long An',
    'Nam Dinh',
    'Nghe An',
    'Ninh Binh',
    'Ninh Thuan',
    'Phu Tho',
    'Phu Yen',
    'Quang Binh',
    'Quang Nam',
    'Quang Ngai',
    'Quang Ninh',
    'Quang Tri',
    'Soc Trang',
    'Son La',
    'Tay Ninh',
    'Thai Binh',
    'Thai Nguyen',
    'Thanh Hoa',
    'Thua Thien Hue',
    'Tien Giang',
    'Tra Vinh',
    'Tuyen Quang',
    'Vinh Long',
    'Vinh Phuc',
    'Yen Bai',
]
const filter = ref({
    location: 'all',
    salary: '0',
    key_word: '',
    company_id: 0,
})
const listJobs = ref([])
const listCompanies = ref([])
const isEmpty = ref(true)
const showDetail = (id) => {
    router.push(`/jobs/detail/${id}`)
}
const getListJobs = async () => {
    try {
        const res = await getAllJobs(filter.value)
        listJobs.value = res.data.jobs

        if (listJobs.value && listJobs.value.length > 0) {
            isEmpty.value = false
        }

        listJobs.value.forEach((job) => {
            const matchedCompany = listCompanies.value.find((company) => company.company_id === job.company_id)
            if (matchedCompany) {
                job.company_name = matchedCompany.name
            }
        })
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
onMounted(() => {
    getListCompanies()
    getListJobs()
})
</script>
