import { ref } from "vue"
import { defineStore } from "pinia"
import { getTasks } from "../services/tasksApi"

export const useTaskStore = defineStore('tasks', () => {
    const loading = ref(false)
    const error = ref(null)

    let tasks = ref([])

    async function fetchTasks() {
        loading.value = true
        error.value = null
        
        try {
            tasks.value = await getTasks()
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    function toggleTask(id) {
        const taskFound = tasks.value.find(task => task.id === id)

        if (taskFound.done) {
            taskFound.done = false
        } else {
            taskFound.done = true
        }
    }

    return { error, loading, tasks, fetchTasks, toggleTask }
})