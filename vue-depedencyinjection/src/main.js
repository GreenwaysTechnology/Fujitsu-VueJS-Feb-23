
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .provide('version', '1.0.0')
    .mount('#app')
