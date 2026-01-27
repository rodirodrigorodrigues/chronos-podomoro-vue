<script setup lang="ts">
import Home from "./pages/Home/Home.vue";
import { useTimerWorker } from "../src/composables/useTimerWorker";

useTimerWorker();
</script>

<template>
  <Home />
</template>

<style scoped></style>
