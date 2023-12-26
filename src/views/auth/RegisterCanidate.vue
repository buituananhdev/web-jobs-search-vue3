<template>
    <div>
        <section class="bg-gray-50">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    Python
                </router-link>
                <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create a Candidate Account
                        </h1>
                        <form @submit.prevent="onRegister" class="space-y-4 md:space-y-6">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
                                    >Your name <span class="text-red-700">*</span></label
                                >
                                <input
                                    v-model="user.name"
                                    type="text"
                                    name="name"
                                    id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Your Name"
                                    required=""
                                />
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900"
                                    >Your phone <span class="text-red-700">*</span></label
                                >
                                <input
                                    v-model="user.phone"
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Your Phone Number"
                                    required=""
                                />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
                                    >Your email <span class="text-red-700">*</span></label
                                >
                                <input
                                    v-model="user.email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
                                    >Password <span class="text-red-700">*</span></label
                                >
                                <input
                                    v-model="user.password"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required=""
                                />
                            </div>
                            <div>
                                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900"
                                    >Confirm Password <span class="text-red-700">*</span></label
                                >
                                <input
                                    v-model="confirmPass"
                                    type="password"
                                    name="confirm_password"
                                    id="confirm_password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required=""
                                />
                            </div>
                            <span v-if="isFail" class="text-[red] pt-2">Mật khẩu không khớp</span>
                            <input type="hidden" name="formType" value="signup_candidate" />
                            <button
                                type="submit"
                                class="w-full text-white flex flex-row items-center justify-center w-full px-2 py-2 mb-4 text-sm font-bold bg-[#00b14f] leading-6 capitalize duration-100 transform rounded-lg shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1"
                            >
                                Sign Up
                            </button>
                            <p class="text-sm font-light text-gray-500">
                                Already have an account?
                                <router-link to="login" class="font-medium text-primary-600 hover:underline">Log in</router-link>
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
const user = ref({
    role: 'candidate',
})
const confirmPass = ref('')
const isFail = ref(false)

const onRegister = async () => {
    try {
        if (confirmPass.value !== user.value.password) {
            isFail.value = true
            return
        }
        isFail.value = false
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
</script>

<style lang="scss" scoped></style>
