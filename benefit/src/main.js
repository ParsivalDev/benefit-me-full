import App from './App.vue'
import { createApp } from 'vue';
import router from './router/routes.js' 
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '../src/assets/base.css'
const app = createApp(App)

app.use(router);

app.mount('#app');