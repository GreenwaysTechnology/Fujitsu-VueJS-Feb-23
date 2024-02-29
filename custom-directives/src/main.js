// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { myPlugin } from './plugins/myPlugin'

createApp(App)
    .directive('foucs', (element, binding) => {
        console.log(element)
        element.focus()
    })
    .directive('highlight', (element, binding) => {
        console.log('element', element)
        console.log('binding', binding)
        element.style.backgroundColor = binding.value
        element.addEventListener('mousemove', evt => {
            highlight('yellow')
        })
        element.addEventListener('mouseleave', evt => {
            highlight(binding.value)
        })
        const highlight = color => {
            element.style.backgroundColor = color
        }
    })
    //register plugin
    .use(myPlugin)
    .mount('#app')
