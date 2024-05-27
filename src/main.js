import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
import './assets/style.css'; // Inkluder en generel CSS-fil hvis nødvendigt



const app = createApp(App)





app.use(router)

app.mount('#app')
