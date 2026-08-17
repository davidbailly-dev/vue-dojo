<script setup>
import { ref } from 'vue'

const counter = ref(0)
const myInput = ref('')

function getBackground() {
  if (myInput.value.length > 1) {
    return 'background-color: green'
  } else {
    return 'background-color: red'
  }
}
</script>

<template>
  <h1>Vue Dojo</h1>
  <button type="button" @click="counter++">{{ counter }}</button>
  <input :style="getBackground()" @input="myInput = $event.target.value" />
  <p>myInput = {{ myInput }}</p>
</template>
