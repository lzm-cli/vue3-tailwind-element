import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/less/tailwind.less';

createApp(App).use(router).mount('#app');
