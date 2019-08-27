import Taro from "@tarojs/taro";
import { create } from "dva-core";

let _registered = false;

export default function(options) {
  const app = create(options);
  if (!_registered) {
    options.models.forEach(model => app.model(model));
    _registered = true;
  }
  app.start();
  return app;
}