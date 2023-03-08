import { Component, PropsWithChildren } from 'react';
import './app.less'

class App extends Component<PropsWithChildren> {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  onLaunch() {
    console.log('onLaunch');
    wx.login({
      success(res) {
        wx.showToast({
          title: '成功' + res.code,
          icon: 'success',
          duration: 2000
        });        
        console.log('success', res);
      },
      failed(res) {
        console.log('failed', res);
      }
    });
  }

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
