<script setup>
import { ref } from 'vue'

const counter = ref(0)
const myInput = ref('')
const defaultTasks = [
  {
    id: 1,
    text: 'Laver la voiture'
  },
  {
    id: 2,
    text: 'Acheter croquettes'
  },{
    id: 3,
    text: 'Commander cadeau anniversaire'
  }
]
const tasks = ref(defaultTasks)

function getBackground() {
  if (myInput.value.length > 1) {
    return 'background-color: green'
  } else {
    return 'background-color: red'
  }
}

function toggleTasksData() {
  if (tasks.value.length > 0) {
    tasks.value = []
  } else {
    tasks.value = defaultTasks
  }
}

</script>

<template>
  <h1>Vue Dojo</h1>
  <button type="button" @click="counter++">{{ counter }}</button>
  <input :style="getBackground()" @input="myInput = $event.target.value" />
  <button @click="toggleTasksData">Afficher/Masquer tâches</button>
  <table v-if="tasks.length > 0">
    <tr v-for="task in tasks" :key="task.id">
      <td>{{ task.text }}</td>
    </tr>
  </table>
  <p v-else>Aucune tâche à afficher.</p>
</template>
