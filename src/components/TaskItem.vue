<script setup>
const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['toggle'])

function taskIsDone(done) {
    if (done) {
        return 'text-decoration: line-through'
    }
}
</script>

<template>
    <div>
        <span :style="taskIsDone(task.done)">{{ task.text }}</span>
        <button @click="emit('toggle', task.id)">Basculer</button>
    </div>
</template>