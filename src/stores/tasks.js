import { ref } from "vue"
import { defineStore } from "pinia"
import { getTasks } from "../services/tasksApi"

export const useTaskStore = defineStore('tasks', () => {
    const loading = ref(false)
    const error = ref(null)
    const defaultTasks = [
        {
            id: 1,
            text: 'Laver la voiture',
            done: true
        },
        {
            id: 2,
            text: 'Acheter croquettes',
            done: false
        },
        {
            id: 3,
            text: 'Commander cadeau anniversaire',
            done: false
        }
    ]

    let tasks = ref(defaultTasks)

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

    function toggleTasksData() {
        if (tasks.value.length > 0) {
            tasks.value = []
        } else {
            tasks.value = defaultTasks
        }
    }

    return { error, loading, tasks, fetchTasks, toggleTask, toggleTasksData }
})