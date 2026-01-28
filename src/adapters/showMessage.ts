import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const defaultOptions = {
  theme: "auto",
  position: "top-center",
  autoClose: 5000,
  dangerouslyHTMLString: true,
};

export const showMessage = {
  success: (message: string) => toast(message, { type: "success", ...defaultOptions }),
  error: (message: string) => toast(message, { type: "error", ...defaultOptions }),
  warn: (message: string) => toast(message, { type: "warning", ...defaultOptions }),
  info: (message: string) => toast(message, { type: "info", ...defaultOptions }),
  dismiss: () => toast.clear(),
};
