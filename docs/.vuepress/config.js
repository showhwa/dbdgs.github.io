const nav = require('./config/nav.js');

// set your global autometa options - override in page frontmatter
const autometa_options = {
  site: {
    name: 'Bravo Yeung',
    twitter: 'yanglr',
  },
  canonical_base: 'https://dbdgs.cn',
};

// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: 'https://dbdgs.cn'
};

const myJsonld = `
{
 "@context": "http://schema.org",
 "@type": "WebSite",
 "url": "https://dbdgs.cn/",
 "author": {
  "@type": "Person",
  "name": "大白的故事"
 },

 "description": "大白的故事 - 文章",
 "image": "https://cdn.jsdelivr.net/gh/dbdgs/images@main/dabai.jpg",
 "thumbnailUrl": "https://cdn.jsdelivr.net/gh/dbdgs/images@main/geekzl.png",
 "license": "MIT License",
 "name": "大白的故事"
}
`;

module.exports = {
  title: "dbdgs | 大白的故事",
  description: '大白的技术故事，专注于分享IT前沿技术、干货知识、热点资讯等，同时分享硬核的自媒体赚钱方法、推广技巧和运营实战，技术文章涵盖python,dotnet,node.js,git,github等。', // 描述,以 <meta> 标签渲染到页面html中
  // base: '/', // '/<github仓库名>/'， 默认'/'
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹,
    ['link', { rel: 'apple-touch-icon', href: '/img/favicon.ico' }],
    ['meta', { name: 'keywords', content: '大白的故事,极客中心,个人技术博客,后台开发面试题,技术文档' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    [
      'link',
      {
        rel: 'search',
        type: "application/opensearchdescription+xml",
        href: "/opensearch.xml",
        title: "大白的故事"
      }
    ],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1'}]
    // ['script', { type: 'application/ld+json' }, myJsonld ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '大白的故事',
      description: '大白的技术故事，专注于分享IT前沿技术、干货知识、热点资讯等'
    }
  },
  markdown: {
    lineNumbers: true, // 代码行号
    externalLinks:
      { target: '_blank', rel: 'nofollow noopener noreferrer' }
  },

  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  themeConfig: { // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/nav-logo.png', // 导航栏logo
    repo: 'dbdgs/dbdgs.github.io', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    domain: 'https://dbdgs.cn',
    //*** 以下配置是Vdoing主题改动和新增的配置 ***//

    // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'geekzl.com', // 必需
      // link: 'https://github.com/wpfgeek' // 可选的
    },
    blogger: { // 博主信息，显示在首页侧边栏
      avatar: 'https://cdn.jsdelivr.net/gh/dbdgs/images@main/dabai.jpg',
      name: '大白的故事',
      slogan: '终身学习者'
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:legege007@yeah.net'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/wpfgeek'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo: '大白的故事 | <a href="https://github.com/dbdgs/dbdgs.github.io/blob/main/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
    }
  },
  plugins: [ // 插件
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],
    ['sitemap', {
      hostname: "https://dbdgs.cn",
      // 排除无实际内容的页面
      exclude: ["/404.html"]
    }],
    [
      'vuepress-plugin-canonical',
      {
        baseURL: 'https://dbdgs.cn', // base url for your canonical link, optional, default: ''
        stripExtension: false // strip '.html' , optional, default: false
      }
    ],
    ['fulltext-search'],
    ['autometa', autometa_options],
    ['feed', feed_options],
    ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
      thirdparty: [ // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q='
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=site%3Adbdgs.cn%20'
        }
      ]
    }],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: '503f098e7e5b3a5b5d8c5fc2938af002'
      }
    ],
    [
      'vuepress-plugin-comment', // 评论
      // {
      //   choosen: 'valine',
      //   options: {
      //     el: '#valine-vuepress-comment',
      //     appId: 'qnS1jobNF7CROIQ0XYWBnVOH-gzGzoHsz',
      //     appKey: 'LIKa0ePqFMkglQfOkN0JNK6c',
      //     avatar: 'monsterid'
      //   }
      // },
      {
        choosen: 'gitalk',
        options: {
          clientID: 'b6e73b8e0f841bc26b33',
          clientSecret: '55027aae57302a42d940a31232d2c696987359bc',
          repo: 'dbdgs.cn', // GitHub 仓库
          owner: 'dbdgs', // GitHub仓库所有者(个人用户 或 organization)
          admin: ['yanglr'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
        }
      }
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY/MM/DD, hh:mm:ss');
        }
      }
    ]
  ],
  // configureWebpack: {
  //   //webpack别名 如![Image from alias](~@alias/image.png)
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}
