<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTaskStore } from '../stores/tasks'

const taskStore = useTaskStore()
const route = useRoute()
const id = computed(() => route.params.id)
const task = computed(() => taskStore.tasks.find(t => t.id === parseInt(id.value)))
</script>

<template>
    <p>ID de la tâche : {{ id }}</p>
    <p>{{ task.text }}</p>
</template>