<template>
    <section class="bg-gray-50 dark:bg-gray-900 py-[80px] h-fix">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img
                    class="w-8 h-8 mr-2"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                    alt="logo"
                />
                FastCV
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                    >
                        Create an account
                    </h1>
                    <form class="space-y-4 md:space-y-3" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Your email</label
                            >
                            <input
                                v-model="user.email"
                                type="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                            />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Your Role</label
                            >
                            <select
                                id="role"
                                v-model="user.role"
                                name="role"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            >
                                <option value="candidate">Candidate</option>
                                <option value="company">Company</option>
                            </select>
                        </div>
                        <div v-if="user.role === 'company'" class="space-y-4 md:space-y-3">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Your name</label
                                >
                                <input
                                    id="company_name"
                                    v-model="user.company_name"
                                    type="text"
                                    name="company_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Desciption</label
                                >
                                <textarea
                                    v-model="user.description"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                ></textarea>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Your location</label
                                >
                                <select
                                    id="role"
                                    v-model="user.location"
                                    name="role"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                >
                                    <option v-for="(city, index) in listCity" :key="index" :value="city.code">
                                        {{ city.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div v-else class="space-y-4 md:space-y-3">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Your name</label
                                >
                                <input
                                    id="company_name"
                                    v-model="user.company_name"
                                    type="text"
                                    name="company_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Your phone</label
                                >
                                <input
                                    v-model="user.phone"
                                    type="number"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="0372837777"
                                    required=""
                                />
                            </div>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Password</label
                            >
                            <input
                                v-model="user.password"
                                type="password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                for="confirm-password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Confirm password</label
                            >
                            <input
                                v-model="user.confirm_password"
                                type="password"
                                placeholder="••••••••"
                                @change="isMatch"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <span v-if="isShowError" class="text-[red] text-xs">Passwords do not match</span>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input
                                    id="terms"
                                    aria-describedby="terms"
                                    type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required=""
                                />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300"
                                    >I accept the
                                    <a
                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#"
                                        >Terms and Conditions</a
                                    ></label
                                >
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            @click="submit"
                        >
                            Create an account
                        </button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?
                            <router-link
                                to="login"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >Login here</router-link
                            >
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNotification } from '@kyvg/vue3-notification'
import axios from 'axios'
import { registerApi } from '@/services/auth.service'
const notification = useNotification()
const router = useRouter()
const user = ref({
    role: 'candidate',
})
const listCity = ref([])
const isShowError = ref(false)
// const confirmPassword = ref('')

const submit = async () => {
    try {
        await registerApi(user.value)
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
const getListCity = async () => {
    try {
        const response = await axios.get('https://provinces.open-api.vn/api/')
        listCity.value = response.data
    } catch (err) {
        console.error('API Error:', err)
    }
}
const isMatch = () => {
    if (user.value.password !== user.value.confirm_password) {
        isShowError.value = true
    } else {
        isShowError.value = false
    }
}
onMounted(() => {
    getListCity()
})
</script>

<style lang="scss" scoped></style>
