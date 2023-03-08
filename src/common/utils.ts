export default function fuseLine({
  tryTimes = 3,
  restoreTime = 5000,
  coolDownThreshold = 1000,
  name = 'unnamed',
}: {
  tryTimes?: number;
  restoreTime?: number;
  name?: string;
  coolDownThreshold?: number;
} = {}) {
  let fuseLocked = false;
  let fuseTryTimes = tryTimes;
  let coolDownTimer;

  // 重置熔断器
  const reset = () => {
    fuseLocked = false;
    fuseTryTimes = tryTimes;
    console.log(`${name}-熔断器重置`);
  };

  const request = async () => {
    if (fuseLocked) throw new Error(`${name}-请求中，请稍后重试`);

    // 已达最大重试次数
    if (fuseTryTimes <= 0) {
      fuseLocked = true;

      // 重置熔断器
      setTimeout(() => reset(), restoreTime);

      throw new Error(`${name}-请求被熔断!!`);
    }

    // 自动冷却
    if (coolDownTimer) clearTimeout(coolDownTimer);
    coolDownTimer = setTimeout(() => reset(), coolDownThreshold);

    // 允许当前请求通过熔断器，记录 +1
    fuseTryTimes = fuseTryTimes - 1;
    console.log(`${name}-通过熔断器(${tryTimes - fuseTryTimes}/${tryTimes})`);
    return Promise.resolve();
  };

  return function(
    _target: Record<string, any>,
    _propertyName: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
  ) {
    const method = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      await request();
      if (method) return method.apply(this, args);
    };
  };
}