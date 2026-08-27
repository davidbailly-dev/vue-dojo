<script setup>
import { useTheme } from './composables/useTheme';

const { activeTheme, toggleTheme } = useTheme()

</script>

<template>
  <div class="app" :class="activeTheme">
    <h1>Vue Dojo</h1>
    <RouterView />
    <button @click="toggleTheme()">Basculer thème clair/sombre</button>
  </div>
</template>
