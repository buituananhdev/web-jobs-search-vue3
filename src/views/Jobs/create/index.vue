<template>
    <div class="post-container bg-[#f4f4f4f4]">
        <div class="max-w-[1000px] m-auto pt-10">
            <div class="list-items flex flex-col gap-6">
                <h4 class="text-xl font-bold text-center">Thông tin đăng tuyển</h4>
                <div class="list-items p-[40px] flex flex-col gap-6">
                    <div class="req-item w-full flex flex-col gap-[16px] p-[20px] bg-white rounded-lg">
                        <div class="flex gap-2 items-center">
                            <div class="p-2 rounded-full bg-[#f4f4f4]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                    <path
                                        d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                </svg>
                            </div>
                            <p class="req-item-title">Tiêu đề thông tin tuyển dụng</p>
                        </div>
                        <input
                            v-model="job.title"
                            class="p-2 border-b focus:outline-none rounded-lg"
                            type="text"
                            placeholder="Nhập thông tin tuyển dụng"
                        />
                    </div>
                    <div class="req-item w-full flex flex-col gap-[16px] p-[20px] bg-white rounded-lg">
                        <div class="flex gap-2 items-center">
                            <img
                                src="@/assets/icons/icn_money.svg"
                                alt="salary"
                                class="flex flex-col items-center justify-center gap-10 h-[40px] w-[40px] p-2 bg-gradient-to-r from-green-500 to-teal-700 rounded-full"
                            />
                            <p>Mức lương</p>
                        </div>
                        <input
                            v-model="job.salary"
                            class="p-2 border-b focus:outline-none rounded-lg"
                            required=""
                            type="number"
                            name="salary"
                            placeholder="Nhập mức lương"
                        />
                    </div>
                    <div class="req-item w-full flex flex-col gap-[16px] p-[20px] bg-white rounded-lg">
                        <div class="flex gap-2 items-center">
                            <img
                                src="@/assets/icons/icn_address.svg"
                                alt="address"
                                class="flex flex-col items-center justify-center gap-10 h-[40px] w-[40px] p-2 bg-gradient-to-r from-green-500 to-teal-700 rounded-full"
                            />
                            <p>Địa điểm cần tuyển dụng:</p>
                        </div>
                        <select v-model="job.location" class="w-full h-full border p-4 rounded-lg">
                            <option value="all">Tất cả</option>
                            <option v-for="(city, index) in listCity" :key="index" :value="city">
                                {{ city }}
                            </option>
                        </select>
                    </div>
                    <div class="req-item w-full flex flex-col gap-[16px] p-[20px] bg-white rounded-lg">
                        <div class="flex gap-2 items-center">
                            <div class="p-2 rounded-full bg-[#f4f4f4]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                    <path
                                        d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z" />
                                </svg>
                            </div>
                            <p>Mô tả công việc</p>
                        </div>
                        <textarea
                            v-model="job.description"
                            class="border rounded-lg h-[100px]"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <div class="req-item w-full flex flex-col gap-[16px] p-[20px] bg-white rounded-lg">
                        <div class="flex gap-2 items-center">
                            <div class="p-2 rounded-full bg-[#f4f4f4]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                    <path
                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                </svg>
                            </div>
                            <p>Yêu cầu công việc</p>
                        </div>
                        <textarea
                            v-model="job.requirements"
                            class="border rounded-lg h-[100px]"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <button
                        class="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#00b14f] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1 text-white"
                        @click="handleClick"
                    >
                        {{ job_id ? 'Cập nhật bài tuyển dụng' : 'Đăng bài tuyển dụng'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { addJob, getSingleJob, updateJob } from '@/services/job.service'
import { useNotification } from '@kyvg/vue3-notification'

const notification = useNotification()
const job = ref({
    location: 'all',
})
const job_id = ref('')
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
const createJob = async () => {
    try {
        job.value.company_id = parseInt(localStorage.getItem('entity_id'))
        await addJob(job.value)
        router.push('/list-jobs')
        notification.notify({
            type: 'success',
            title: 'Thêm bài đăng thành công',
        })
        router.push('/list-jobs')
    } catch (error) {
        console.error(error)
        notification.notify({
            type: 'error',
            title: 'Thêm bài đăng thất bại',
        })
    }
}
const editJob = async () => {
    try {
        delete job.value.job_id
        await updateJob(job_id.value, job.value)
        notification.notify({
            type: 'success',
            title: 'Cập nhật bài đăng thành công',
        })
        router.push('/list-jobs')
    } catch (error) {
        console.error(error)
        notification.notify({
            type: 'error',
            title: 'Cập nhật bài đăng thất bại',
        })
    }
}
const getJob = async () => {
    try {
        const res = await getSingleJob(job_id.value)
        job.value = res.data
    } catch (error) {
        console.error(error)
    }
}
const handleClick = () => {
    if (job_id.value) {
        editJob()
    } else {
        createJob()
    }
}
onMounted(() => {
    job_id.value = parseInt(useRoute().params.id)
    if (job_id.value) {
        getJob()
    }
})
</script>
