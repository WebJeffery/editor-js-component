# 富文本编辑器

基于 Editor.js 封装的富文本组件


### 常用命令

```bash
# 安装依赖
ppnpm install

# 开发组件
pnpm run dev

# 开发文档
pnpm run docs:dev

# 部署文档
pnpm run docs:deploy

# 打包组件库
pnpm run build:lib

# 本地打包
pnpm pack

# 发布pnpm
pnpm publish

```

### 安装插件依赖

安装到根目录，使用参数 `-w`，如安装 `dayjs`

```shell
pnpm add dayjs -w
```

在子包安装依赖，使用 `-r`

```shell
pnpm add dayjs --filter @editor-vue/examples
```

vitepress-theme-demoblock
