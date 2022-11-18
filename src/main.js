import {createApp} from 'vue'
import App from './App.vue'

import router from "./router/index";

/**
 * 使用 use() 加载 router 配置
 */
createApp(App).use(router).mount('#app')
