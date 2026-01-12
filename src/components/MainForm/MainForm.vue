<script setup lang="ts">
import { ref } from "vue";
import { PlayCircleIcon } from "lucide-vue-next";
import Cycles from "../Cycles/index";
import DefaultButton from "../DefaultButton/index";
import DefaultInput from "../DefaultInput/index";

const taskName = ref<string>("");

function handleCreateNewTask(e: Event) {
  console.log("Value of input:", taskName.value);
}
</script>

<template>
  <form class="form" @submit.prevent="handleCreateNewTask">
    <div class="formRow">
      <DefaultInput labelText="Label" id="meuInput" type="text" placeholder="Digite algo" v-model="taskName"/>
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