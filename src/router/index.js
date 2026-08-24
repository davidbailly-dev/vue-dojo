import { createRouter, createWebHistory } from "vue-router";
import TaskDetailPage from "../pages/TaskDetailPage.vue";
import TaskListPage from "../pages/TaskListPage.vue";

const routes = [
    { path: '/', component: TaskListPage },
    { path: '/task/:id', component: TaskDetailPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router