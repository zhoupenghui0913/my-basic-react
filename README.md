## 环境
- node 8.15.0
- npm 6.4.1

## 构建

```
npm install		# 安装依赖模块
```

```
npm run dll		# 静态资源预编译
```

```
npm start		# 运行开发环境，默认监听8888端口
```

```
npm run build		# 正式打包，用于生产环境
```

```
npm run prettier		# 自动格式化src目录下的所有.js/.css/.scss/.less文件
```

## 目录结构

```
.
├── build				# 正式打包后，会自动生成该文件夹，其中会包含最终用于生产环境的文件
├── dll					# 静态资源预编译插件生成的dll文件
├── public				# 静态文件，index.html等
├── src                                 # 项目代码目录
│   ├── component                     # 所有的公共类UI组件
│   ├── container                     # 所有的页面级容器组件
|	├── ...
|   	└── router			# 根组件，里面配置了顶级的路由
|   ├── models				# 模块（包含store数据/reducers/actions）
│   ├── assets                          # 所有的图片、文件等静态资源
│   ├── styles                          # 所有的样式文件
│   ├── store                           # store数据中心
│   ├── root                            # 根页
│   ├── store                           # store数据中心
│   ├── util                            # 自定义工具
│   ├── index.js                        # 项目入口JS
│   └── index.html                      # 主页html文件,开发环境和生产打包共用
├── server.js				# 用于开发环境的服务部署
├── webpack.dev.config.js		# 用于开发环境的webpack配置
├── webpack.dll.config.js		# 静态资源预编译所需webpack配置
└── webpack.production.config.js	# 用于生产环境正式打包的webpack配置
```
