import { computed } from 'vue'

export function useTaskFilter(tasks, searchRef) {
    const filteredTasks = computed(() => tasks.value.filter(task => task.text.includes(searchRef.value)))

    return {
        filteredTasks
    }
}