<script setup lang="ts">
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-vue-next";
import { ref, watch } from "vue";

type availableTheme = 'dark' | 'light';

const theme = ref<availableTheme>('dark');

function handleThemeChange(e: MouseEvent) {
  e.preventDefault();
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
}

watch(theme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
})
</script>

<template>
  <nav class="menu">
    <a class="menuLink" href="#" aria-label="Ir para home" title="Ir para home">
      <HouseIcon />
    </a>
    <a class="menuLink" href="#" aria-label="Ir para o histórico" title="Ir para o histórico">
      <HistoryIcon />
    </a>
    <a class="menuLink" href="#" aria-label="Configurações" title="Configurações">
      <SettingsIcon />
    </a>
    <a class="menuLink" href="#" aria-label="Mudar tema" title="Mudar tema" @click="handleThemeChange">
      <SunIcon />
    </a>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
}

.menuLink {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  text-decoration: none;
  background-color: var(--primary);
  color: var(--text-over-primary);
  transition: 0.1s;
  padding: 1.2rem;
  border-radius: 0.8rem;
}

.menuLink:hover {
  filter: brightness(50%);
}

.menuLink svg {
  width: 2.4rem;
  height: 2.4rem;
}
</style>
