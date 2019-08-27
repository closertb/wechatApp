import invariant from 'invariant';

/**
 * @description 显示警告信息
 * @param {boolean} condition 提示条件
 * @param {string} message 提示信息
 */
export function warning(condition, message) {
  if (!condition) {
    invariant(condition, `[Furion]: ${message}`);
  }
}

/**
 * @description 检查是否为字符串
 * @param {*} string
 */
export function isString(string) {
  return Object.prototype.toString.call(string) === '[object String]';
}