<script setup>
import { ref } from 'vue'

const themeName = ref('dark')

function toggleTheme() {
  if (themeName.value === 'light') {
    themeName.value = 'dark'
  } else {
    themeName.value = 'light'
  }
}
</script>

<template>
  <div class="app" :class="themeName">
    <h1>Vue Dojo</h1>
    <RouterView />
    <button @click="toggleTheme()">Basculer thème clair/sombre</button>
  </div>
</template>
