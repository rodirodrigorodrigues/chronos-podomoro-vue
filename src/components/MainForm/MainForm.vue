<script setup lang="ts">
import { ref } from "vue";
import { PlayCircleIcon } from "lucide-vue-next";
import Cycles from "../Cycles/index";
import DefaultButton from "../DefaultButton/index";
import DefaultInput from "../DefaultInput/index";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskStore } from "../../store/taskStore";

const taskStore = useTaskStore();

const taskName = ref<string>("");

function handleCreateNewTask(e: Event) {
  const formattedTaskName = taskName.value.trim();
  if (!formattedTaskName) {
    alert("Please enter a valid task name.");
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
}
</script>

<template>
  <form class="form" @submit.prevent="handleCreateNewTask">
    <div class="formRow">
      <DefaultInput
        labelText="Label"
        id="meuInput"
        type="text"
        placeholder="Digite algo"
        v-model="taskName"
      />
    </div>
    <div className="formRow">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="formRow">
      <Cycles />
    </div>
    <div className="formRow">
      <DefaultButton color="green">
        <PlayCircleIcon />
      </DefaultButton>
    </div>
  </form>
</template>
