<template>
  <div class="cycles">
    <span>Ciclos:</span>
    <div class="cycleDots">
      <span class="cycleDot workTime"></span>
      <span class="cycleDot shortBreakTime"></span>
      <span class="cycleDot workTime"></span>
      <span class="cycleDot shortBreakTime"></span>
      <span class="cycleDot workTime"></span>
      <span class="cycleDot shortBreakTime"></span>
      <span class="cycleDot workTime"></span>
      <span class="cycleDot longBreakTime"></span>
    </div>
  </div>
</template>

<style scoped>
.cycles {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
}

.cycleDots {
  display: flex;
  gap: 0.8rem;
}

.cycleDot {
  display: block;
  width: 2rem;
  height: 2rem;
  background-color: var(--primary);
  border-radius: 50%;
}

.workTime {
  background-color: var(--warning);
}

.shortBreakTime {
  background-color: var(--primary);
}

.longBreakTime {
  background-color: var(--info);
}
</style>