<script setup>
import { computed } from "vue";
import { useTaskStore } from "../../store/taskStore";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

const taskStore = useTaskStore();
const nextCycle = computed(() => getNextCycle(taskStore.currentCycle));
const nextCycleType = computed(() => getNextCycleType(nextCycle));
const activeTask = computed(() => taskStore.activeTask);
const tipsForWhenActiveTask = computed(() => ({
  workTime: `Foque por ${taskStore.config.workTime} minutos.`,
  shortBreakTime: `Descanse por ${taskStore.config.shortBreakTime} minutos.`,
  longBreakTime: `Descanse por ${taskStore.config.longBreakTime} minutos.`,
}));
const tipsForWhenNotActiveTask = computed(() => ({
  workTime: `Próximo ciclo é de ${taskStore.config.workTime} minutos.`,
  shortBreakTime: `Próximo descanso é de ${taskStore.config.shortBreakTime} minutos.`,
  longBreakTime: `Próximo descanso é de ${taskStore.config.longBreakTime} minutos.`,
}));
</script>

<template>
  <p v-if="activeTask">
    {{ tipsForWhenActiveTask[activeTask.type] }}
  </p>
  <p v-else>
    {{ tipsForWhenNotActiveTask[nextCycleType] }}
  </p>
</template>
