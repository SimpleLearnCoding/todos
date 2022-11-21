import {createApp} from 'vue'
import App from './App.vue'

import router from "./router/index";
import store from "./store/index";

import Antd from "ant-design-vue";

/**
 * 使用 use() 加载 router 配置
 * 使用 use() 加载数据源 store
 *
 * 使用 use() 注册 Antd 组件 - 该方式为全局注册，更多请参考：
 * @link https://antdv.com/docs/vue/getting-started-cn
 */
const app = createApp(App)

app.use(store)
app.use(router)
app.use(Antd)

app.mount('#app')
