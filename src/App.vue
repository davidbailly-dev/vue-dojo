<script setup>
import { ref, provide } from 'vue'
import CardWrapper from './components/CardWrapper.vue'

const themeName = ref('light')

provide('theme', themeName)

const counter = ref(0)
const colorInput = ref('')

function getBackground() {
  if (colorInput.value.length > 1) {
    return 'background-color: green'
  } else {
    return 'background-color: red'
  }
}

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
    <CardWrapper>
      <template #header>
        <h3>Compteur</h3>
      </template>
      <button type="button" @click="counter++">{{ counter }}</button>
    </CardWrapper>
    <input :style="getBackground()" @input="colorInput = $event.target.value" />
    <RouterView />
    <button @click="toggleTheme()">Basculer thème clair/sombre</button>
  </div>
</template>
