<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const id = computed(() => route.params.id)

</script>

<template>
    <p>ID de la tâche : {{ id }}</p>
</template>