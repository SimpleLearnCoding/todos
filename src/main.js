import {createApp} from 'vue'
import App from './App.vue'

import router from "./router/index";
import store from "./store/index";

/**
 * 使用 use() 加载 router 配置
 * 使用 use() 加载数据源 store
 */
createApp(App).use(store).use(router).mount('#app')
