<template>
    <div>
        <section class="bg-gray-50 p-[50px]">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create a Company Account
                        </h1>
                        <form @submit.prevent="onRegister" class="space-y-4 md:space-y-6">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Company name <span
                                        class="text-red-700">*</span></label>
                                <input v-model="formData.name" type="text" id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Avepoint Ltd" required />
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Description
                                    <span class="text-red-700">*</span></label>
                                <textarea v-model="formData.description" type="text" id="description"
                                    placeholder="Your description"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required></textarea>
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Your phone <span
                                        class="text-red-700">*</span></label>
                                <input v-model="formData.phone" type="tel" id="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Your Phone Number" required />
                            </div>
                            <div>
                                <label for="location" class="block mb-2 text-sm font-medium text-gray-900">Location <span
                                        class="text-red-700">*</span></label>
                                <select v-model="formData.location" id="location"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required>
                                    <option v-for="city in cityList" :key="city" :value="city">{{ city }}</option>
                                </select>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email <span
                                        class="text-red-700">*</span></label>
                                <input v-model="formData.email" type="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password <span
                                        class="text-red-700">*</span></label>
                                <input v-model="formData.password" type="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required />
                            </div>
                            <div>
                                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900">Confirm
                                    Password <span class="text-red-700">*</span></label>
                                <input v-model="confirmPassword" type="password" id="confirm_password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required />
                            </div>
                            <button type="submit"
                                class="w-full text-white flex flex-row items-center justify-center w-full px-2 py-2 mb-4 text-sm font-bold bg-[#00b14f] leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1">
                                Sign Up
                            </button>
                            <p class="text-sm font-light text-gray-500">
                                Already have an account?
                                <router-link to="/" class="font-medium text-primary-600 hover:underline">Log
                                    in</router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNotification } from '@kyvg/vue3-notification'
import { registerApi } from '@/services/auth.service'
const notification = useNotification()
const router = useRouter()
const cityList = ref([
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
])
const confirmPassword = ref('')
const formData = ref({
    name: '',
    description: '',
    phone: '',
    location: '',
    email: '',
    password: '',
    role: 'company'
})
const onRegister = async () => {
    try {
        await registerApi(formData.value)
        router.push('/login')
    } catch (error) {
        notification.notify({
            type: 'error',
            title: 'Registration failed',
            text: 'An error occurred during registration. Please try again.',
        })
        console.error(error)
    }
}
</script>

<style>
/* Bổ sung CSS của bạn nếu cần thiết */
</style>
