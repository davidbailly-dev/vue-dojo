<script setup>
import { inject } from 'vue'

const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['toggle'])

const currentTheme = inject('theme')

function taskIsDone(done) {
    if (done) {
        return 'text-decoration: line-through'
    }
}
</script>

<template>
    <span :style="taskIsDone(task.done)">{{ task.text }}</span>
    <button @click="emit('toggle', task.id)">Basculer</button>
    <RouterLink :to="'/task/' + task.id">Voir détails</RouterLink>
    <p>Active theme : {{ currentTheme }}</p>
</template>