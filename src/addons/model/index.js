import expandSubscriptions from './expandSubscriptions';
import expandEffects from './expandEffects';
import expandReducers from './expandReducers';
import expandState from './expandState';

class Model {};

Model.extend = function(model) {
  const {
    state,
    reducers,
    effects,
    subscriptions, 
    ...other
  } = model;
  return {
    ...other,
    state: expandState(state),
    reducers: expandReducers(reducers),
    effects: expandEffects(effects),
    subscriptions: expandSubscriptions(subscriptions)
  };
}

export default Model;