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
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export const useTaskStore = defineStore("taskStore", {
  state: (): TaskStateModel => ({ ...initialState }),
  actions: {
    createTask(task: TaskModel) {
      this.currentCycle = getNextCycle(this.currentCycle);
      task.type = getNextCycleType(this.currentCycle);
      task.duration = this.config[task.type];
      this.tasks.push(task);
      this.activeTask = task;
      this.secondsRemaining = task.duration * 60;
      this.formattedSecondsRemaining = formatSecondsToMinutes(this.secondsRemaining);
    },
    interruptTask() {
      this.activeTask = null;
      this.secondsRemaining = 0;
      this.formattedSecondsRemaining = "00:00";
    }
  },
});
