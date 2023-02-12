import React from 'react'
import { View } from '@tarojs/components'

export default function ListItem(props: {
  index: number;
  item: any;
}) {
  const {
    index,
    item: {
      title,
      items,
    },
 } = props;
  return (
    <View className="bussiness-item">
      <View className="item-title-wrapper">
        <View className="item-index">{index < 10 ? `0${index + 1}` : index + 1}</View>
        <View className="item-title">{title}</View>
      </View>
      <View className="item-content">
        {items.map((content) => <View className="item">{content}</View>)}
      </View>
    </View>
  );
}
