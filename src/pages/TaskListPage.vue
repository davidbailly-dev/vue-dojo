<script setup>
import { ref } from 'vue'
import CardWrapper from '../components/CardWrapper.vue';
import TaskItem from '../components/TaskItem.vue';
import { useTaskFilter } from '../composables/useTaskFilter';

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
const { filteredTasks } = useTaskFilter(tasks, search)

function toggleTask(id) {
  const taskFound = tasks.value.find(task => task.id === id)

  if (taskFound.done) {
    taskFound.done = false
  } else {
    taskFound.done = true
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
    <button @click="toggleTasksData">Afficher/Masquer tâches</button>
    <input @input="search = $event.target.value" placeholder="Rechercher une tâche..." />
    <table v-if="filteredTasks.length > 0">
        <tr v-for="task in filteredTasks" :key="task.id">
        <td>
            <CardWrapper>
            <template #header>
                <h3>Tâche</h3>
            </template>
            <TaskItem :task="task" @toggle="toggleTask(task.id)" />
            </CardWrapper>
        </td>
        </tr>
    </table>
    <p v-else>Aucune tâche à afficher.</p>
</template>