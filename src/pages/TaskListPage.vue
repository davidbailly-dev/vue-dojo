<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import CardWrapper from '../components/CardWrapper.vue';
import TaskItem from '../components/TaskItem.vue';
import { useTaskFilter } from '../composables/useTaskFilter';
import { useTaskStore } from '../stores/tasks.js';

const taskStore = useTaskStore()

onMounted(() => { taskStore.fetchTasks() })

const search = ref('')
const { filteredTasks } = useTaskFilter(storeToRefs(taskStore).tasks, search)

</script>

<template>
    <button @click="taskStore.toggleTasksData">Afficher/Masquer tâches</button>
    <input @input="search = $event.target.value" placeholder="Rechercher une tâche..." />
    <div>
        <p v-if="taskStore.loading">Chargement des tâches...</p>
        <p v-if="taskStore.error">{{ taskStore.error }}</p>
    </div>
    <table v-if="filteredTasks.length > 0">
        <tr v-for="task in filteredTasks" :key="task.id">
        <td>
            <CardWrapper>
              <template #header>
                  <h3>Tâche</h3>
              </template>
              <TaskItem :task="task" @toggle="taskStore.toggleTask(task.id)" />
            </CardWrapper>
        </td>
        </tr>
    </table>
    <p v-else>Aucune tâche à afficher.</p>
</template>