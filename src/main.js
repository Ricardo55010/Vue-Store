import { createApp } from 'vue'
import App from './App.vue'
import router from "@/Router";
import vuetify from './Vuetify';
import store from './store';
createApp(App).use(router).use(vuetify).use(store).mount('#app')