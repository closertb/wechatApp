export default function expandEffects(effects) {
  /**
   * @description 创建update Effect
   * @param {*} sagaEffects
   */
  function createUpdateEffect(sagaEffects) {
    const { put } = sagaEffects;
    return function* updateEffect(payload) {
      yield put({ type: 'updateState', payload });
    };
  }
  /**
   * @description 创建select Effect
   * @param {*} sagaEffects
   */
  function createSelectEffect(sagaEffects) {
    const { select } = sagaEffects;

    return function* selectEffect(selector) {

      if (typeof selector === 'function') {
        return yield select(selector)
      }

      const state = yield select();

      if (typeof selector === 'string') {
        return state[selector];
      }

      if (Array.isArray(selector) && selector.length) {
        return selector.reduce((pre, cur) => {
          pre[cur] = state[cur];
          return pre;
        }, {});
      }

      return state;
    };
  }

  return Object.keys(effects).reduce((next, key) => {
    const effect = effects[key];
    next[key] = function* (action, sagaEffects) {
      const nextSagaEffects = {
        ...sagaEffects,
        update: createUpdateEffect(sagaEffects),
        select: createSelectEffect(sagaEffects)
      };
      return yield effect(action, nextSagaEffects);
    }
    return next;
  }, {});
}