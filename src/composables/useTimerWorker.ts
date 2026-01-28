import { watch } from "vue";
import { TimerWorkerSingleton } from "../workers/timeWorkerSingleton";
import { loadBeep } from "../utils/loadBeep";
import { useTaskStore } from "../store/taskStore";

export function useTimerWorker() {
  // TODO: numa v2 (resolver este acoplamento)
  const store = useTaskStore();
  const worker = TimerWorkerSingleton.getInstance();
  let playBeep: ReturnType<typeof loadBeep> | null = null;

  worker.onmessage((e: MessageEvent) => {
    const secondsLeft = e.data;

    if (secondsLeft <= 0) {
      playBeep?.();
      playBeep = null;
      store.completeTask();
      worker.terminate();
    } else {
      store.countDown(secondsLeft);
    }
  });

  watch(
    () => store.activeTask,
    (activeTask) => {
      if (!activeTask) {
        worker.terminate();
        playBeep = null;
        return;
      }

      if (!playBeep) {
        playBeep = loadBeep();
      }

      // Worker só aceita tipos primitivos
      worker.postMessage({
        activeTask: store.activeTask ? { ...store.activeTask } : null,
        secondsRemaining: store.secondsRemaining,
      });
    }
  );
}
