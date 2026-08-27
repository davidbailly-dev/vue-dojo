import { ref } from "vue"
import { defineStore } from "pinia"
import { getTasks } from "../services/tasksApi"

export const useTaskStore = defineStore('tasks', () => {
    const loading = ref(false)
    const error = ref(null)
    const tasks = ref([])

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

        taskFound.done = !taskFound.done
    }

    return { error, loading, tasks, fetchTasks, toggleTask }
})