import { createRouter, createWebHistory } from "vue-router";

import AppProjects from './pages/AppProjects.vue';
import AppHome from './pages/AppHome.vue';
import NotFound from './pages/NotFound.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'projects-details',
            component: ProjectDetail
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'not-found',
            component: NotFound
        }

    ]

});
export default router;