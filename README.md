# fez-demo-handlebars
基于FEZ构建的Handlebars的模块化开发示例

> 本示例演示了基于FEZ构建Handlebars模板形式的开发结构，借助 FEZ 可以使用es6标准特性开发项目。

## 使用方法

- 本示例依赖 【[FEZ前端模块化工程开发框架](https://github.com/furic-zhao/fez)】请先`git clone https://github.com/furic-zhao/fez.git` 下载 FEZ工程框架 到本地任意目录

- 进入 FEZ 工程目录，执行 `git clone https://github.com/furic-zhao/fez-demo-handlebars.git` 将本示例下载到 FEZ 根目录

- 进入 fez-demo-handlebars 目录 执行 `gulp`,FEZ 会自动打开系统默认浏览器并进入研发环境。

> FEZ默认支持3层目录结构，若项目目录太深，请自行修改项目目录`gulpfile.babel.js`文件中的`fezDeep`数值。

## 目录结构

#### 源码 src 目录

````bash
.
├── lib
│   └── q.js
├── static
│   ├── fonts
│   ├── images
│   │   ├── fez-logo.png
│   │   └── sprite
│   │       ├── sprite.png
│   │       └── sprite@2x.png
│   ├── slice
│   │   ├── weibo.png
│   │   ├── weibo@2x.png
│   │   ├── weixin.png
│   │   └── weixin@2x.png
│   ├── styles
│   │   ├── article.less
│   │   ├── common.less
│   │   ├── components
│   │   │   ├── modals.less
│   │   │   └── tooltip.less
│   │   ├── index
│   │   │   └── big-logo.less
│   │   ├── index.less
│   │   ├── lib
│   │   │   ├── mixins.less
│   │   │   ├── normalize.css
│   │   │   ├── rem.less
│   │   │   └── reset.less
│   │   ├── list.less
│   │   ├── public
│   │   │   └── footer.less
│   │   └── sprite
│   │       └── sprite.less
│   └── svg
│       ├── arrow-down.svg
│       ├── arrow-left.svg
│       ├── arrow-right.svg
│       ├── arrow-up.svg
│       ├── blue-plane.svg
│       ├── business.svg
│       ├── business2.svg
│       ├── enginee.svg
│       ├── filter.svg
│       ├── finance.svg
│       ├── game.svg
│       ├── graphics.svg
│       ├── machine.svg
│       ├── office.svg
│       ├── plane.svg
│       ├── pohot.svg
│       ├── print.svg
│       ├── success.svg
│       └── video.svg
└── views
    ├── article
    │   ├── index.html
    │   ├── index.js
    │   └── module
    │       └── detail
    │           ├── index.hbs
    │           ├── index.js
    │           ├── jumbotron.hbs
    │           └── service.js
    ├── index
    │   ├── index.html
    │   ├── index.js
    │   └── module
    │       ├── fezdesc
    │       │   ├── index.hbs
    │       │   ├── index.js
    │       │   └── service.js
    │       └── jumbotron
    │           ├── index.hbs
    │           ├── index.js
    │           └── service.js
    ├── list
    │   ├── index.html
    │   ├── index.js
    │   └── module
    │       ├── jumbotron
    │       │   ├── index.hbs
    │       │   ├── index.js
    │       │   └── service.js
    │       └── listing
    │           ├── index.hbs
    │           ├── index.js
    │           └── service.js
    └── public
        ├── demo-data.js
        ├── module
        │   ├── footer
        │   │   ├── index.hbs
        │   │   ├── index.js
        │   │   └── service.js
        │   └── header
        │       ├── header.hbs
        │       ├── index.js
        │       └── service.js
        └── utils
            └── url-param.js
````

#### 研发环境目录

````bash
.
├── article.html
├── bower_components
│   ├── animate.css
│   │   └── animate.css
│   ├── bootstrap
│   │   └── dist
│   │       ├── css
│   │       │   └── bootstrap.css
│   │       ├── fonts
│   │       │   ├── glyphicons-halflings-regular.eot
│   │       │   ├── glyphicons-halflings-regular.svg
│   │       │   ├── glyphicons-halflings-regular.ttf
│   │       │   ├── glyphicons-halflings-regular.woff
│   │       │   └── glyphicons-halflings-regular.woff2
│   │       └── js
│   │           └── bootstrap.js
│   ├── font-awesome
│   │   ├── css
│   │   │   └── font-awesome.css
│   │   └── fonts
│   │       ├── FontAwesome.otf
│   │       ├── fontawesome-webfont.eot
│   │       ├── fontawesome-webfont.svg
│   │       ├── fontawesome-webfont.ttf
│   │       ├── fontawesome-webfont.woff
│   │       └── fontawesome-webfont.woff2
│   └── jquery
│       └── dist
│           └── jquery.js
├── index.html
├── lib
│   └── q.js
├── list.html
├── static
│   ├── css
│   │   ├── article.css
│   │   ├── common.css
│   │   ├── index.css
│   │   └── list.css
│   ├── images
│   │   ├── fez-logo.png
│   │   └── sprite
│   │       ├── sprite.png
│   │       └── sprite@2x.png
│   ├── js
│   │   ├── article.js
│   │   ├── article.js.map
│   │   ├── index.js
│   │   ├── index.js.map
│   │   ├── list.js
│   │   └── list.js.map
│   └── svg
│       └── svg-symbols.svg
├── zindex
│   ├── css
│   │   └── bootstrap.min.css
│   └── js
│       ├── bootstrap.min.js
│       ├── handlebars-v4.0.5.min.js
│       ├── jquery-2.1.3.min.js
│       └── qrcode.min.js
└── zindex.html
````

#### 生产环境目录

````bash
.
├── article.html
├── index.html
├── list.html
├── rev-manifest.json
└── static
    ├── css
    │   ├── article-236cd4d254.css
    │   ├── common-2a85afb211.css
    │   ├── index-fce5cdf53b.css
    │   ├── list-236cd4d254.css
    │   ├── vendor-a8aa7b964c.css
    │   └── vendor-bootstrap-fontawesome-cbfc21c125.css
    ├── fonts
    │   ├── fontawesome-webfont-674f50d287.eot
    │   ├── fontawesome-webfont-912ec66d75.svg
    │   ├── fontawesome-webfont-af7ae505a9.woff2
    │   ├── fontawesome-webfont-b06871f281.ttf
    │   ├── fontawesome-webfont-fee66e712a.woff
    │   ├── glyphicons-halflings-regular-448c34a56d.woff2
    │   ├── glyphicons-halflings-regular-8988968814.svg
    │   ├── glyphicons-halflings-regular-e18bbf611f.ttf
    │   ├── glyphicons-halflings-regular-f4769f9bdb.eot
    │   ├── glyphicons-halflings-regular-fa2772327f.woff
    │   └── rev-manifest.json
    ├── images
    │   ├── fez-logo-15e3d33a37.png
    │   ├── rev-manifest.json
    │   └── sprite
    │       ├── sprite-4a7b29201e.png
    │       └── sprite@2x-fbc399a1fc.png
    ├── js
    │   ├── a-vendor-jquery-bootstrap-280e7f8cc8.js
    │   ├── article-8577ef3230.js
    │   ├── common-47ed5f906c.js
    │   ├── index-7ec4bcb9cf.js
    │   └── list-90c6a3280f.js
    └── svg
        └── svg-symbols-f6dbb1e8e6.svg
````
