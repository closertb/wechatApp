import { Component, PropsWithChildren } from 'react'
import { View, Text, Image } from '@tarojs/components'
import robot from '../../assets/img/robot.webp';
import code from '../../assets/code.jpg';
import contact from '../../assets/contact.png';
import './index.less'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onShareAppMessage() {
    console.log('share contat');
  }

  previewCodeImg = (e) => {
    //接收传递过来的当前图片url
    const current = e.currentTarget.dataset.url;
    console.log('show', current);

    // @ts-ignore
    wx.previewImage({
      urls: ['https://doddle.oss-cn-beijing.aliyuncs.com/oldNotes/code.jpg'],
      complete() {
        console.log('complete');
      },
      fail() {
        console.log('failed');
      }
    });
  }

  render () {
    return (
      <View className='home'>
        <View className='header-wrap'>
          <View className="title-wrap">
            <View>企业合作</View>
            <View>联系我们</View>
            <Text className="comp-title">蓉汇政通科技 & 事务所 {'>>'}</Text>
          </View>
          <Image className="contact-show" src={contact} />
        </View>
        <View className="contact-wrap">
          <View className="code-wrap" >
            <Image src={code} onClick={this.previewCodeImg} className="img-show" />
          </View>
          <View className='phone-wrap'>
            <View className="flex-wrap">
              <Text className="special-txt">联系电话</Text>
              <Text className="phone-show">15902842263</Text>
            </View>
            <View className="address">地址：成都市青羊区光华南三路</View>
          </View>
        </View>
        {/* <Image src={robot} className="robot-bg" /> */}
      </View>
    )
  }
}
