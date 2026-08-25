<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../stores/tasks'

const taskStore = useTaskStore()
const route = useRoute()
const id = computed(() => route.params.id)
let task = computed(() => taskStore.tasks.find(task => task.id === parseInt(id.value)))
</script>

<template>
    <p>ID de la tâche : {{ id }}</p>
    <p>{{ task.text }}</p>
</template>