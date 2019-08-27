import Taro from '@tarojs/taro';
import { View, Button } from "@tarojs/components";
import { Spin } from "@/components";
import { models } from "@/decorators";
import { PageView } from "@/addons";

import "./index.less";

@models("index")
class Index extends PageView {
  render() {
    const { _handleAdd, productList } = this.props;
    return (
      <Spin spinning={false}>
        <View className="list">
          <View className="content header">
            <View>商品名称</View>
            <View>库存</View>
            <View>价格</View>
            <View>操作</View>
          </View>
          {productList.map(item => (
          <View key={item.id} className="content">
            <View>{item.name}</View>
            <View>{item.count}</View>
            <View>{item.price}</View>
            <View>
              <Button onClick={_handleAdd.bind(this, item)}>添加</Button>
            </View>
          </View>))
          }
        </View>
      </Spin>
    );
  }
}

Index.config = {
  navigationBarTitleText: "首页"
};

export default Index;
