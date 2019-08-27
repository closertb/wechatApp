import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import dva from './utils/dva';
import Index from './pages/index/index';
import * as models from './models';

import './app.less';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}
  config = {
    pages: ['pages/index/index', 'pages/detail/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '吃饭不洗碗',
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
          text: '购物车',
          iconPath: './assets/tab/cart.png',
          selectedIconPath: './assets/tab/cart-active.png',
        }
      ]
    }
  };

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

const app = dva({
  models: Object.keys(models).map(key => models[key])
});

const store = app._store;

Taro.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

export default app;
