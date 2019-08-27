import Taro, { PureComponent } from '@tarojs/taro';
import { ROUTER_CHANGE_EVENT, events } from '../constants';

class PageView extends PureComponent {
  componentDidShow() {
    if (super.componentDidShow) {
      super.componentDidShow();
    }
    const router = this.$router;
    events.trigger(ROUTER_CHANGE_EVENT, router);
  }
}

export default PageView;
