import Taro from '@tarojs/taro';
import { View, Button } from "@tarojs/components";
import { models } from "@/decorators/index";
import { PageView } from "@/addons";
import { Spin } from "@/components";

@models("index")
class Detail extends PageView {
  render() {
    const { _handleRemove, cartList } = this.props;

    return (
      <Spin spinning={false}>
        <View className="list">
          <View className="content header cart">
            <View>商品名称</View>
            <View>数量</View>
            <View>价格</View>
            <View>总价</View>
            <View>操作</View>
          </View>
          {cartList.length ? cartList.map(item => (
          <View key={item.id} className="content cart">
            <View>{item.name}</View>
            <View>{item.count}</View>
            <View>{item.price}</View>
            <View>{item.price * item.count}</View>
            <View>
              <Button onClick={_handleRemove.bind(this, item)}>移除</Button>
            </View>
          </View>)) : 
          <View>暂无商品</View>
          }
        </View>
      </Spin>
    );
  }
}

Detail.config = {
  navigationBarTitleText: "详情"
};

export default Detail;
