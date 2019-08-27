import Core from './core';

function http(defaultOptions = {}, middlewares = []) {
  const coreInstance = new Core(defaultOptions, middlewares);
  const httpInstance = function(url, options) {
    return coreInstance.request(url, options);
  }
 return httpInstance;
}

export default http({}, []);
