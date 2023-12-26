<template>
    <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-4">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <router-link to="/" class="flex items-center">
                    <span class="self-center text-xl font-semibold whitespace-nowrap">Python</span>
                </router-link>
                <div class="flex items-center lg:order-2">
                    <div v-if="!isLogin" class="flex space-x-4">
                        <router-link
                            to="/login"
                            class="text-green-700 hover:text-white border border-green-300 hover:bg-[#00b14f] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Đăng nhập</router-link
                        >
                        <router-link
                            to="/register_candidate"
                            class="text-white bg-[#00b14f] focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Đăng ký</router-link
                        >
                        <router-link to="/register_company"
                            class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">Đăng
                            ký tuyển dụng</router-link>
                    </div>
                    <div v-else class="flex space-x-4">
                        <div class="relative inline-block text-left">
                            <div>
                                <button @click="isDropDownVisible = !isDropDownVisible" type="button"
                                    class="dropbtn inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <img src="@/assets/icons/icn_logo.svg" alt="">
                                    {{ currentUser?.email }}
                                    <svg
                                        class="-mr-1 h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div
                                v-if="isDropDownVisible"
                                class="dropdown-content absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabindex="-1"
                            >
                                <div v-if="currentUser?.role === 'candidate'">
                                    <router-link
                                        to="/"
                                        class="text-gray-700 block px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-0"
                                        >Trang chủ</router-link
                                    >
                                    <router-link
                                        to="/applicants"
                                        class="text-gray-700 block px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-1"
                                        >Đơn ứng tuyển của tôi</router-link
                                    >
                                </div>
                                <div v-else>
                                    <router-link
                                        to="/list-jobs"
                                        class="text-gray-700 block px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-0"
                                        >Tin tuyển dụng của tôi</router-link
                                    >
                                    <router-link
                                        to="/jobs"
                                        class="text-gray-700 block px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-0"
                                        >Tạo tin tuyển dụng</router-link
                                    >
                                </div>
                                <button
                                    class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                    id="menu-item-3"
                                    @click="signOut"
                                    role="menuitem"
                                    tabindex="-1"
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup>
import router from '@/router'
import { authStore } from '@/stores/auth.store.js'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const isDropDownVisible = ref(false)
const auth = authStore()
const currentUser = ref({})
const isLogin = ref(false)

watch(
    () => [auth.user, localStorage.getItem('access_token')],
    ([newUser, newIsLogin]) => {
        currentUser.value = newUser
        isLogin.value = Boolean(newIsLogin)
    }
)

const signOut = () => {
    localStorage.removeItem('access_token')
    isLogin.value = false
    router.push('/login')
    isDropDownVisible.value = false
}

const handleWindowClick = (event) => {
    if (!event.target.matches('.dropbtn') && isDropDownVisible.value) {
        isDropDownVisible.value = false
    }
}

onMounted(() => {
    window.addEventListener('click', handleWindowClick)
    currentUser.value.role = localStorage.getItem('role')
    currentUser.value.email = localStorage.getItem('email')
})

onBeforeUnmount(() => {
    window.removeEventListener('click', handleWindowClick)
})
</script>
