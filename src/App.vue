<script setup>
import { computed, ref } from 'vue'

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
const search = ref('')
const filteredTasks = computed(() => {
  return tasks.value.filter(task => task.text.includes(search.value))
})

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
  <input @input="search = $event.target.value" placeholder="Rechercher une tâche..." />
  <table v-if="filteredTasks.length > 0">
    <tr v-for="task in filteredTasks" :key="task.id">
      <td>{{ task.text }}</td>
    </tr>
  </table>
  <p v-else>Aucune tâche à afficher.</p>
</template>
