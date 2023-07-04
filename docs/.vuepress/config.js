const path = require('path')
module.exports = {
  title: 'note',
  description: '',
  base: "/note",
  // head: [
  //   [
  //     'script', { src: 'js/index.js' }
  //   ]
  // ],
  themeConfig: {
    nav: [
      { text: 'RECORD', link: '/record' },
      { text: 'MIX', link: '/mix' },
      { text: 'JS', link: '/js' },
      { text: '性能优化', link: '/性能优化' },
      { text: 'electron', link: '/electron' },
      { text: 'programming', link: '/programming' },
      { text: 'react', link: '/react' },
      { text: 'webpack', link: '/webpack' },
      { text: 'css', link: '/css' },
    ],
    sidebarDepth: 2,
    sidebar: [
      { title: 'RECORD', path: '/record' },
      { title: 'MIX', path: '/mix', collapsable: true },
      { title: 'JS', path: '/js' },
      { title: '性能优化', path: '/性能优化' },
      { title: 'electron', path: '/electron' },
      { title: 'programming', path: '/programming' },
      { title: 'react', path: '/react' },
      { title: 'webpack', path: '/webpack' },
      { title: 'css', path: '/css' },
    ],

    palette: path.resolve(__dirname, 'palette.styl'),//样式修改
  },
  configureWebpack: {

  },
  chainWebpack: (config) => {
    config.module
      .rule('url-loader')
      .test(/\.(awebp)(\?.*)?$|\.(webp)(\?.*)?$|\.(image)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .end()
  },
}
