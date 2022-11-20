const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    /**
     * 指定 dev 端口号
     */
    devServer: {
        port: 8081
    }
})
