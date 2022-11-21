import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {

    /**
     * 根据当前工作目录中的 `mode` 加载 .env 文件
     * @type {Record<string, string>}
     */
    const env = loadEnv(mode, process.cwd(), '')
    console.log(command, mode, env.BACKEND_HOST)

    if (command === 'serve' || mode === 'development') {
        // 开发环境配置
        /**
         * 使用 localhost 时，请务必加上 http:// 前缀
         * @type {string}
         */
        env.BACKEND_HOST = 'http://localhost:83'
    }
    if (command === 'build' || mode === 'production') {
        // 生产环境配置
        env.BACKEND_HOST = 'https://www.google.com'
    }
    console.log('当前 BACKEND_HOST 环境变量：' + env.BACKEND_HOST)

    /**
     * 通用配置
     */
    return {
        plugins: [vue(), vueJsx()],

        /**
         * 定义服务器相关信息
         * @link https://cn.vitejs.dev/config/server-options.html#server-https
         */
        server: {
            port: 8081
        },

        /**
         * @link https://cn.vitejs.dev/config/#environment-variables
         *
         * 在 ts 中可通过 process.env 形式获取环境变量的值
         * ex: process.env.BACKEND_HOST
         */
        define: {
            'process.env': env
        },

        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    }
})
