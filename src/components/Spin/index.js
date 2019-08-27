import Taro, { useEffect, useRef } from '@tarojs/taro';
import { View } from '@tarojs/components';

function Spin(props) {
  const {
    tips = '',
    spinning = false,
    children,
    wrapperClassName
  } = props;

  const isLoading = useRef(false);
  
  useEffect(() => {
    (spinning && !isLoading.current
      ? Taro.showLoading
      : Taro.hideLoading
    )({ 
      title: tips,
      mask: true,
      success: () => isLoading.current = true,
      fail: () => isLoading.current = false
    })
    if(!spinning) isLoading.current = false;
  },
  [spinning]);

  return (
    <View className={wrapperClassName}>
      {children}
    </View>
  );
}

export default Taro.memo(Spin);
