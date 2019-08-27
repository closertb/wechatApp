import { Model } from '@/addons';
import Taro from '@tarojs/taro';

const productList = [{
  id: 1,
  name: '鞋子',
  count: 5,
  price: 159.93
}, {
  id: 2,
  name: '裤子',
  count: 6,
  price: 250
}, {
  id: 3,
  name: '袜子',
  count: 7,
  price: 5.99
}, {
  id: 4,
  name: '上衣',
  count: 2,
  price: 500.00
}];

export default Model.extend({
  namespace: 'index',
  state: {
    productList,
    cartList: [],
    actionCount: 0,
    count: 0,
    action: {
      loading: false,
    }
  },
  effects: {
    * handleAdd({ payload: product }, { select, update }) {
      const { cartList } = yield select('index');
      const index = cartList.findIndex(item => item.id === product.id);
      if (~index) {
        cartList[index].count += 1;
      } else {
        cartList.push({ ...product, count: 1 });
      }
      yield update({ cartList: [...cartList] });
    },
    * handleRemove({ payload: product }, { select, update }) {
      const { cartList } = yield select('index');
      const index = cartList.findIndex(item => item.id === product.id);
      if (~index) {
        if (cartList[index].count > 1) {
          cartList[index].count -= 1;
        } else {
          cartList.splice(index, 1);
        }
      }
      yield update({ cartList: [...cartList] });
    }
  },
  subscriptions: {
    setup({ dispatch, listen }) {
      listen('pages/index/index', () => {
        dispatch({ type: 'add' });
      })
    }
  }
});