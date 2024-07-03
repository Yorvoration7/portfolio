import { createApp } from 'vue'
import '@/assets/styles/style.css'
// import './assets/styles/media.css'
// import './assets/styles/fonts.css'

import App from '@/App.vue'
import { router } from './router.js'
createApp(App).use(router).mount('#app')


