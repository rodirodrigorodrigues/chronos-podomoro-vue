<script setup lang="ts">
import { ref } from "vue";
import { PlayCircleIcon, StopCircleIcon } from "lucide-vue-next";
import Cycles from "../Cycles/index";
import DefaultButton from "../DefaultButton/index";
import DefaultInput from "../DefaultInput/index";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskStore } from "../../store/taskStore";
import Tips from "../Tips/index";
import { showMessage } from "../../adapters/showMessage";

const taskStore = useTaskStore();
const taskName = ref<string>("");

function handleCreateNewTask(e: Event) {
  const formattedTaskName = taskName.value.trim();
  if (!formattedTaskName) {
    showMessage.warn("Please enter a valid task.");
    return;
  }

  const newTask: TaskModel = {
    id: Date.now().toString(),
    name: taskName.value,
    startDate: Date.now(),
    completeDate: null,
    interruptDate: null,
    duration: 1,
    type: "workTime",
  };

  // Atualiza o estado do Pinia
  taskStore.createTask(newTask);
  showMessage.success("Tasked created with sucess.");
}

function handleInterruptTask() {
  taskStore.interruptTask();
  showMessage.error("Tasked interrupt.");
}
</script>

<template>
  <form class="form" @submit.prevent="handleCreateNewTask">
    <div class="formRow">
      <DefaultInput labelText="Label" id="meuInput" type="text" placeholder="Digite algo" v-model="taskName"
        :disabled="!!taskStore.activeTask" />
    </div>
    <div className="formRow">
      <Tips />
    </div>
    <div className="formRow" v-if="taskStore.currentCycle > 0">
      <Cycles />
    </div>
    <div className="formRow">
      <template v-if="!taskStore.activeTask">
        <DefaultButton aria-label="Iniciar nova tarefa" title="Iniciar nova tarefa" color="green" type="submit">
          <PlayCircleIcon />
        </DefaultButton>
      </template>
      <template v-else>
        <DefaultButton aria-label="Interromper tarefa" title="Interromper tarefa" color="red" type="button"
          @click="handleInterruptTask">
          <StopCircleIcon />
        </DefaultButton>
      </template>
    </div>
  </form>
</template>
