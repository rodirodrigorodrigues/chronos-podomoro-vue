<script setup lang="ts">
import { useAttrs } from 'vue';
type DefaultInputPros = {
  id: string;
  labelText: string;
}

// atributos declarados com defineProps
const props = defineProps<DefaultInputPros>();
// atributos não declarados como props
const attrs = useAttrs();
</script>

<template>
  <label for="meuInput">{{ props.labelText }}</label>
  <input class="input" :id="props.id" v-bind="attrs">
</template>

<style scoped>
.input {
  background-color: transparent;
  text-align: center;
  border: none;
  font-size: 1.8rem;
  padding: 0.8rem;
  color: var(--text-default);
  outline: none;
  border: 0.2rem solid transparent;
  border-bottom: 0.2rem solid var(--primary);
  transition: all 0.1s ease-in-out;
}

.input:focus {
  border-radius: 0.8rem;
  border: 0.2rem solid var(--primary);
}

input:disabled {
  border-bottom: 0.2rem solid var(--disabled);
  color: var(--text-muted);
}

.input::placeholder {
  color: var(--gray-500);
  font-size: 1.4rem;
  font-style: italic;
}
</style>