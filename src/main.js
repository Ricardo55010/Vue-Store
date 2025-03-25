import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import vuetify from './plugins/Vuetify';
import store from './store/index';
createApp(App).use(router).use(vuetify).use(store).mount('#app')