import { createRouter, createWebHistory } from "vue-router";
import TaskDetailPage from "../pages/TaskDetailPage.vue";
import TaskListPage from "../pages/TaskListPage.vue";
import { useTaskStore } from "../stores/tasks.js";

const routes = [
    { path: '/', component: TaskListPage },
    {
        path: '/task/:id',
        component: TaskDetailPage,
        async beforeEnter(to, from, next) {
            const taskStore = useTaskStore()

            if (taskStore.tasks.length === 0) {
                await taskStore.fetchTasks()
            }

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