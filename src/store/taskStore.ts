import { defineStore } from "pinia";
import type { TaskStateModel } from "../models/TaskStateModel";
import type { TaskModel } from "../models/TaskModel";
import { getNextCycle } from "../utils/getNextCycle";
import { getNextCycleType } from "../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../utils/formatSecondsToMinutes";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1,
    shortBreakTime: 1,
    longBreakTime: 1,
  },
};

export const useTaskStore = defineStore("taskStore", {
  state: (): TaskStateModel => ({ ...initialState }),

  actions: {
    createTask(task: TaskModel) {
      const nextCycle = getNextCycle(this.currentCycle);

      task.type = getNextCycleType(nextCycle);
      task.duration = this.config[task.type];

      const secondsRemaining = task.duration * 60;

      this.currentCycle = nextCycle;
      this.tasks.push(task);
      this.activeTask = task;
      this.secondsRemaining = secondsRemaining;
      this.formattedSecondsRemaining =
        formatSecondsToMinutes(secondsRemaining);
    },

    interruptTask() {
      const activeTaskId = this.activeTask?.id;

      this.tasks = this.tasks.map(task =>
        task.id === activeTaskId
          ? { ...task, interruptDate: Date.now() }
          : task
      );

      this.activeTask = null;
      this.secondsRemaining = 0;
      this.formattedSecondsRemaining = "00:00";
    },

    completeTask() {
      const activeTaskId = this.activeTask?.id;

      this.tasks = this.tasks.map(task =>
        task.id === activeTaskId
          ? { ...task, completeDate: Date.now() }
          : task
      );

      this.activeTask = null;
      this.secondsRemaining = 0;
      this.formattedSecondsRemaining = "00:00";
    },

    countDown(secondsRemaining: number) {
      this.secondsRemaining = secondsRemaining;
      this.formattedSecondsRemaining =
        formatSecondsToMinutes(secondsRemaining);
    },

    resetTask() {
      Object.assign(this.$state, initialState);
    }
  },
});
