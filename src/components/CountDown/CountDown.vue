<script setup>
  import { useTaskStore } from '../../store/taskStore';
  const taskStore = useTaskStore();
</script>
<template>
  <div class="container">
    {{ taskStore.formattedSecondsRemaining }}
  </div>
</template>

<style scoped>
.container {
  /* clamp(valor_mínimo, valor_ideal, valor_máximo) */
  /* 25vw = 25% da largura da tela. */
  font-size: clamp(8rem, 25vw, 16rem);
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
}
</style>