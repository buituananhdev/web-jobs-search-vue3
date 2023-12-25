import { defineStore } from 'pinia'
import { getMeApi } from '@/services/auth.service'

export const authStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        user: null, // Add a user property to your state
    }),
    actions: {
        async initAuthStore() {
            if (localStorage.getItem('access_token')) {
                const { data } = await getMeApi()
                console.log(data)
                authStore.user = data // Assuming 'data' contains user information
                this.isLoggedIn = true
                console.log('initAuthStore', this.$state)
            }
        },
    },
})
