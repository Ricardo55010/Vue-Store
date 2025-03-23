import { createApp } from 'vue'
import App from './App.vue'
import router from "@/Router";
import vuetify from './Vuetify';
createApp(App).use(router).use(vuetify).mount('#app')