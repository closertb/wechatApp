import Taro from '@tarojs/taro';
import Onion from '../onion';

class HttpCore {
  constructor(defaultOptions, defaultMiddlewares) {
    this.onion = new Onion(defaultMiddlewares);
    this.defaultOptions = defaultOptions;
  }

  use(newMiddleware) {
    this.onion.use(newMiddleware);
    return this;
  }

  request(url, options) {
    console.log('url', url);
    if (typeof url !== 'string') {
      throw new Error('url must be a string');
    }
    return new Promise((resolve, reject) => {
      Taro.request({
        url
      }).then((res) => {
        console.log(res);
      });
    });
  }
}

export default HttpCore;
