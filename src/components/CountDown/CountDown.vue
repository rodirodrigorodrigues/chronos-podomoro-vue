<template>
  <div class="container">
    00:00
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