<script setup>
import { computed, ref } from 'vue'
import TaskItem from './components/TaskItem.vue'
import CardWrapper from './components/CardWrapper.vue'

const counter = ref(0)
const colorInput = ref('')
const defaultTasks = [
  {
    id: 1,
    text: 'Laver la voiture',
    done: true
  },
  {
    id: 2,
    text: 'Acheter croquettes',
    done: false
  },
  {
    id: 3,
    text: 'Commander cadeau anniversaire',
    done: false
  }
]
const tasks = ref(defaultTasks)
const search = ref('')
const filteredTasks = computed(() => {
  return tasks.value.filter(task => task.text.includes(search.value))
})

function getBackground() {
  if (colorInput.value.length > 1) {
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

function basculerTache(id) {
  const taskFound = tasks.value.find(task => task.id === id)

  if (taskFound.done) {
    taskFound.done = false
  } else {
    taskFound.done = true
  }
}

</script>

<template>
  <h1>Vue Dojo</h1>
  <CardWrapper>
    <template #header>
      <h3>Compteur</h3>
    </template>
    <button type="button" @click="counter++">{{ counter }}</button>
  </CardWrapper>
  <input :style="getBackground()" @input="colorInput = $event.target.value" />
  <button @click="toggleTasksData">Afficher/Masquer tâches</button>
  <input @input="search = $event.target.value" placeholder="Rechercher une tâche..." />
  <table v-if="filteredTasks.length > 0">
    <tr v-for="task in filteredTasks" :key="task.id">
      <td>
        <CardWrapper>
          <template #header>
            <h3>Tâche</h3>
          </template>
          <TaskItem :task="task" @toggle="basculerTache(task.id)" />
        </CardWrapper>
      </td>
    </tr>
  </table>
  <p v-else>Aucune tâche à afficher.</p>
</template>
