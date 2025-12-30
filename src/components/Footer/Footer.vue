<template>
  <footer class="footer">
    <a href="#">
      Entenda como funciona a técnica do pomodoro
    </a>

    <a href="#">
      Chronos Pomodoro &copy; {{ new Date().getFullYear() }}
    </a>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
}

.footer a {
  font-size: 1.2rem;
  color: var(--text-muted);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
