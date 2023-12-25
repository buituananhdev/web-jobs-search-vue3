import { defineStore } from 'pinia'
import { getInfo } from '@/services/auth.service.js'

export const authStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        user: null,
    }),
    actions: {
        async initAuthStore() {
            if (localStorage.getItem('access_token')) {
                const res = await getInfo();
                console.log('adasdsadsad', res.data);
                this.user = res.data;
                this.isLoggedIn = true;
                console.log('initAuthStore', this.$state);
            }
        },
    },
});
