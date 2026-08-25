import { ref } from "vue"
import { defineStore } from "pinia"

export const useTaskStore = defineStore('tasks', () => {
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

    return { tasks, toggleTask, toggleTasksData }
})