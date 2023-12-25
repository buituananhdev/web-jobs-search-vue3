import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        meta: { layout: 'empty' },

        component: () => import('@/views/Dashboard.vue'),
    },
    // Auth router
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'empty' },
        component: () => import('@/views/auth/LoginPage.vue'),
    },
    {
        path: '/register_candidate',
        name: 'register_candidate',
        meta: { layout: 'empty' },
        component: () => import('@/views/auth/RegisterCanidate.vue'),
    },
    {
        path: '/register_company',
        name: 'register_company',
        meta: { layout: 'empty' },
        component: () => import('@/views/auth/RegisterCompany.vue'),
    },
    {
        path: '/list-jobs',
        name: 'listjob',
        meta: { layout: 'empty' },
        component: () => import('@/views/Jobs/index.vue'),
    },
    {
        path: '/jobs',
        name: 'createjob',
        // meta: { layout: 'auth', requiresAuth: true },
        meta: { layout: 'empty' },
        component: () => import('@/views/Jobs/create/index.vue'),
    },
    {
        path: '/jobs/:id',
        name: 'updatejob',
        // meta: { layout: 'auth', requiresAuth: true },
        meta: { layout: 'empty' },
        component: () => import('@/views/Jobs/create/index.vue'),
    },
    {
        path: '/applicants',
        name: 'listapplicant',
        meta: { layout: 'empty' },
        // meta: { layout: 'auth', requiresAuth: true },
        component: () => import('@/views/applicants/index.vue'),
    },
    {
        path: '/jobs/detail/:id',
        // meta: { layout: 'auth', requiresAuth: true },
        component: () => import('@/views/Jobs/_id/index.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
