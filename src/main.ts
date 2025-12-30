import { createApp } from 'vue'
// na prática profissional, importações globais no Vue.js ficam no main.ts.
import "./styles/global.css";
import "./styles/theme.css";
import App from './App.vue'

createApp(App).mount('#app')
