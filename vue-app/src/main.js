// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import StatusBar from './components/StatusBar.vue'
//createApp(App).mount('#app')
const app = createApp(App)

console.log(app)

//Global components
app.component('StatusBar', StatusBar)

//mount
app.mount('#app')