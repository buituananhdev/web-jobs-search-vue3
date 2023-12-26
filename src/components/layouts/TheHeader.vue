<template>
    <div>
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-4">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <router-link to="/" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap">Python</span>
                    </router-link>
                    <div class="flex items-center lg:order-2">
                        <div v-if="!isLogin">
                            <div class="flex space-x-4">
                                <router-link
                                    to="/login"
                                    class="text-green-700 hover:text-white border border-green-300 hover:bg-[#00b14f] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Đăng nhập
                                </router-link>
                                <router-link
                                    to="/register_candidate"
                                    class="text-white bg-[#00b14f] focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                                >
                                    Đăng ký
                                </router-link>
                                <router-link
                                    to="/register_company"
                                    class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                >
                                    Đăng ký tuyển dụng
                                </router-link>
                                <button
                                    @click="toggleMobileMenu"
                                    type="button"
                                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                >
                                    <span class="sr-only">Open main menu</span>
                                    <svg
                                        class="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <svg
                                        v-if="!isMobileMenuOpen"
                                        class="hidden w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div v-else>
                            <div class="flex space-x-4">
                                <div class="relative inline-block text-left">
                                    <div>
                                        <button
                                            @click="setStatusDropDown"
                                            type="button"
                                            class="dropbtn inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            id="menu-button"
                                            aria-expanded="true"
                                            aria-haspopup="true"
                                        >
                                            <svg
                                                class="-mr-1 h-5 w-5 text-gray-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div
                                        id="myDropdown"
                                        class="dropdown-content hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="menu-button"
                                        tabindex="-1"
                                    >
                                        <div class="py-1" role="none">
                                            <div v-if="currentUser.role == 'candidate'">
                                                <router-link
                                                    to="/"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-item-0"
                                                    >Trang chủ</router-link
                                                >
                                                <router-link
                                                    :to="`/applicants/canidate/${currentUser.entity_id}}`"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-item-1"
                                                    >Đơn ứng tuyển của tôi</router-link
                                                >
                                            </div>
                                            <div v-else>
                                                <a
                                                    href="${pageContext.request.contextPath}/jobs?companyId=<%= accountBO.getCompanyId(currentUser.getAccountId()) %>"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-item-0"
                                                    >Tin tuyển dụng của tôi</a
                                                >
                                                <a
                                                    href="${pageContext.request.contextPath}/jobs/addPost.jsp"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-item-0"
                                                    >Tạo tin tuyển dụng</a
                                                >
                                            </div>
                                            <form action="${pageContext.request.contextPath}/auth" method="post">
                                                <input type="hidden" name="formType" value="logout" />
                                                <button
                                                    type="submit"
                                                    class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-item-3"
                                                >
                                                    Sign out
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup>
import { authStore } from '@/stores/auth.store.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isDropDownVisible = ref(false)
const isMobileMenuOpen = ref(false)
const auth = authStore()
const currentUser = ref(null)
const isLogin = ref(false)
onMounted(() => {
    currentUser.value = auth.user
    isLogin.value = auth.isLoggedIn
    console.log('ádadas', currentUser.value)
})

const setStatusDropDown = () => {
    isDropDownVisible.value = !isDropDownVisible.value;
}

const handleWindowClick = (event) => {
    if (!event.target.matches('.dropbtn') && isDropDownVisible.value) {
        isDropDownVisible.value = false
    }
}

onMounted(() => {
    // Add a window click event listener on mount
    window.addEventListener('click', handleWindowClick)
});

// Remove the window click event listener on component unmount
onBeforeUnmount(() => {
    window.removeEventListener('click', handleWindowClick)
});
</script>

<style scoped></style>
