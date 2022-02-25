import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'





createApp(App).use(store).use(router).mount('#app')

//  <span
//               v-show="loading"
//               class="spinner-border spinner-border-sm"
//             ></span>