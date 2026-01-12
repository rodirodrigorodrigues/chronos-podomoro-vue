import { defineStore } from 'pinia';
import type { TaskStateModel } from '../models/TaskStateModel';

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

export const useTaskStore = defineStore('taskStore', {
    state: (): TaskStateModel => ({ ...initialState }),
})