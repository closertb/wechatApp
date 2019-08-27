import { Model } from '@/addons';


export default Model.extend({
  namespace: 'detail',
  state: {
    count: 0
  },
  effects: {
    * add(_, { select, update }) {
      const { count } = yield select('detail');
      yield update({ count: count + 1 });
    },
  },
  subscriptions: {
    setup({ dispatch, listen }) {
      listen('pages/detail/index', () => {
        dispatch({ type: 'add' });
      })
    }
  }
});