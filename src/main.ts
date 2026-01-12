import { createApp } from "vue";
import { createPinia } from "pinia";

// imports globais
import "./styles/global.css";
import "./styles/theme.css";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
