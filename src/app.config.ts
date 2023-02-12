export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '蓉汇政通 & 事务所',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/tab/home.png',
        selectedIconPath: './assets/tab/home-active.png',
      },
      {
        pagePath: 'pages/detail/index',
        text: '联系我们',
        iconPath: './assets/tab/cart.png',
        selectedIconPath: './assets/tab/cart-active.png',
      }
    ]
  }
})
