<script setup lang="ts">
import { PlayCircleIcon } from "lucide-vue-next";
import Cycles from "../Cycles/index";
import DefaultButton from "../DefaultButton/index";
import DefaultInput from "../DefaultInput/index";
</script>

<template>
  <form class="form">
    <div class="formRow">
      <DefaultInput labelText="Label" id="meuInput" type="text" placeholder="Digite algo" />
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