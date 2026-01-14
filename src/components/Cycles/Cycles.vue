<script setup>
import { computed } from "vue";
import { useTaskStore } from "../../store/taskStore";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

const taskStore = useTaskStore();
const cycleStep = computed(() =>
  Array.from({ length: taskStore.currentCycle }).map((_, i) => {
    const nextCycle = getNextCycle(i);
    const nextCycleType = getNextCycleType(nextCycle);
    return {
      key: `${nextCycle}_${nextCycleType}`,
      nextCycleType,
      label: cycleDescriptionMap[nextCycleType],
    };
  })
);
const cycleDescriptionMap = {
  workTime: "foco",
  shortBreakTime: "pausa curta",
  longBreakTime: "pausa longa",
};
</script>

<template>
  <div class="cycles">
    <span>Ciclos:</span>
    <div class="cycleDots">
      <span
        v-for="cycle in cycleStep"
        :key="cycle.key"
        :aria-label="`Indicador de ciclo de ${cycle.label}`"
        :title="`Indicador de ciclo de ${cycle.label}`"
        class="cycleDot"
        :class="cycle.nextCycleType"
      ></span>
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
