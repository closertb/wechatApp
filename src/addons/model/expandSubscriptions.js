
import pathToRegexp from 'path-to-regexp';
import { events, ROUTER_CHANGE_EVENT } from '../constants';

const urlDelimiter = '/';

export default function expandSubscriptions(subscriptions = {}) {
  function expandSubscription(key) {
    return function({ dispatch }) {

      function listenFunc(pathname, callback) {
        return events.on(ROUTER_CHANGE_EVENT, ({ path, params }) => {
          if (path === pathname
            || `${urlDelimiter}${pathname}` === path
            || pathToRegexp(pathname).test(path)
          ) {
            callback && callback(params);
          }
        });
      }

      return subscriptions[key]({
        dispatch,
        listen: listenFunc,
      });
    };
  }

  return Object.keys(subscriptions).reduce((pre, cur) => {
    const key = cur;
    pre[key] = expandSubscription(key);
    return pre;
  }, {});
}
