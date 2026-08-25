import { createRouter, createWebHistory } from "vue-router";
import TaskDetailPage from "../pages/TaskDetailPage.vue";
import TaskListPage from "../pages/TaskListPage.vue";
import { useTaskStore } from "../stores/tasks.js";

const routes = [
    { path: '/', component: TaskListPage },
    {
        path: '/task/:id',
        component: TaskDetailPage,
        beforeEnter(to, from, next) {
            const taskStore = useTaskStore()
            const taskFound = taskStore.tasks.find(task => task.id === parseInt(to.params.id))

            if (!taskFound) {
                next('/')
            } else {
                next()
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router