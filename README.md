# vuecli3
* 该项目是基于vue-cli3脚手架搭建的vue项目
* vue-cli3脚手架搭建完成后，新增了环境变量的配置，webpack打包的配置
* src/pages/下面有单页面路由页面也有多页面应用

## 项目背景
* 公司的活动项目太多，每一个项目都要单独配置部署环境太麻烦，所以创建了一个仓库，src/pages/下面的每一个文件夹是一个项目
* 这样就可以使用一个git仓库，一个jenkins配置，很方便
* 缺点是该仓库下的任何一个项目发布，其他的项目如果有变更也会一起发布了。这需要在发布项目前，review代码，减少马虎改写了其他项目的代码，引起不必要的线上bug。


### 首先clone本仓库到本地
执行项目依赖安装
```
npm(cnpm) install
```

### 启动开发环境
```
npm run serve
执行上面的命令会自动代开浏览器，在地址栏上加上/home/index.html，就可以访问首页了
```

### 打包项目（测试环境）
```
npm run build:test
```

### 打包项目（beta环境）
```
npm run build:beta
```

### 打包项目（生产环境）
```
npm run build
```

### 查看webpack配置
```
npm run inspect
```

### 查看webpack配置将该配置写入到output.js(没有该文件就创建)文件里面
```
npm run inspectwebpack
```

### 目录结构
```
    |--- dist 执行npm run build(build:test或build:beta)命令生成的构建后的文件(静态资源) 
    |--- node_modules 执行 npm(cnpm) install生成的第三方依赖包
    |--- public 脚手架自带的文件，打包时会原样输出到dist文件夹下面
        |---  favicon.icon 页面浏览器上的小图标
        |---  index.html html模板，已移到src/pages/**/index.html里面
    |--- src 项目的原代码
        |---  assets 静态资源文件
        |---  components 公共组件文件
        |---  pages 页面集合
            |---  home 主页
            |---  mpa-one 多页demo1
            |---  mpa-two 多页demo2
            |---  spa-one 单页demo1
        |---  utils 静态的js文件集合
            |---  common.js rem功能
            |---  httpRequest.js 封装axios
    |---  .env.development 新增的本地开发环境的环境变量配置
    |---  .env.test 新增的测试环境的环境变量配置
    |---  .env.beta 新增的beta环境的环境变量配置
    |---  .env.production 新增的生产环境的环境变量配置
    |---  vue.config.js 新增的满足项目需求的打包配置
```

### QA
Q: 添加了那些配置
A: 1、添加了postcss-px2rem库，用于转换px为rem，在pakeage.json文件里添加了"postcss-px2rem","lib-flexible","postcss"字段，页面的main.js里面直接引入(import 'utils/common')就可以用了

Q: 在src/pages下面新加项目，需要注意哪些问题？
A: pages文件夹下面有单页面路由demo和多页面应用的demo，按照上面的结构，主要的是要有html文件，因为webapck打包的入口是'./src/pages/**/index.html'，src/pages/下面index.html


