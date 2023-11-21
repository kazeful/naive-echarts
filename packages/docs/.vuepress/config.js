module.exports = {
  // theme: "",
  title: 'Naive-Echarts',
  description: 'EChart components for Vue2',
  base: '/',
  port: '4396',
  themeConfig: {
    // smoothScroll: true,
    nav: [
      {
        text: 'github',
        link: 'https://github.com/kazeful/naive-echarts',
      },
    ],
    sidebar: ['/comps/install', '/comps/use'],
  },
  plugins: ['demo-container'],
  configureWebpack: {
    node: {
      global: true,
    },
    resolve: {
      alias: {
        // '@': '/../src',
      },
    },
  },
  evergreen: true,
}
