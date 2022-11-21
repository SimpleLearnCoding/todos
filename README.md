# todos

> 已从 vue-cli 迁移至 Vite。迁移逻辑为：创建一个 Vite 项目，对比其 package.json 文件，以及其他配置。

### 迁移至 Vite

1. 移除 vue-cli 部分的依赖项
2. 移动 public/index.html 至 index.html
3. 移除了 eslint 部分内容
4. 所有的 import 自定义组件都需要加上 .vue 后缀
