import {createApp} from 'vue';
import App from './App.vue';
import {ElIcon} from 'element-plus';
import 'element-plus/dist/index.css';

import router from './routes';

const app = createApp(App);

app.use(router)
   .use(ElIcon);
app.mount('#app');
