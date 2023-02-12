import { Component, PropsWithChildren } from 'react'
import { View, Text, Image } from '@tarojs/components'
import ListItem from './list-item';
import first from '../../assets/img/first.jpg';
import second from '../../assets/img/second.jpg';
import third from '../../assets/img/third.jpg';
import './index.less'

const bussinessItems = [{
  title: '工商注册',
  items: ['核税个体注册', '有限责任、合伙公司注册', '股份、集团公司注册', '民办非企业、合作社注册', '公司收购、转让、风险评估'],
}, {
  title: '审计、法律咨询服务',
  items: ['研发费用加计扣除指导', '高企研发费用归集账务指导', '财务年报、研发费用及其他专业审计', '法律顾问、公司法务、抵押担保等'],
}, {
  title: '工商税务服务',
  items: ['工商税务注销、解非、年报', '工商税务关系跨区迁移', '公司银行开户（含法人不到场）', '企业经营范围、法人、股东等工商变更', '进出口退税、代理记账'],
}, {
  title: '资质认定 & 资金项目申报',
  items: ['高新技术、种子、雏鹰、瞪羚企业认定', '成都市/四川省/国家级企业技术中心认定',
  '项目制 “企业订制班” “区具品牌班” 培训', '小微企业吸纳高校毕业生社保岗位补贴',
  '企业基础研究投入/研发准备金财政奖返', '小微企业生产经营场地资金补助',
  '中小企业成长工程补助', '中央外贸发展专项资金补贴', '进口技术/设备资金补贴',
'企业水电房租费、贷款贴息补贴'],
}, {
  title: '软件开发 & 新媒体服务',
  items: ['公司官网、软件定制开发', '微信公众号、小程序开发', '广告设计制作、代理', '摄像及视频制作服务'],
}, {
  title: '知识产权服务',
  items: ['商标设计、注册、转让、变更、续展与异议申请',
  '专利申请、复审、购买、转让', '版权登记、转让、变更、补证'
]}, {
  title: '许可证、落户业务代办',
  items: [
  '学历、技能人才、积分落户咨询与代办',
  '社保补缴、户口迁移、居住证办理咨询',
  '企业行政处罚修复',
  '食品经营许可证（或三小备案）',
  '人力资源许可证',
  '劳务派遣许可证',
  '药品经营许可证',
  '医疗器械许可证',
  '公公共卫生许可证',
  '电信增值业务许可证',
  '网络文化许可证',
],
}];

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='body-bg'>
        <View className="comp-wrapper">
          <Text className="comp-tips">合作共赢、以信立业 !</Text>
        </View>
        <View className="img-wrapper">
          <Image src={first} className="img-show" />
          <Image src={second} className="img-show" />
          <Image src={third} className="img-show" />
        </View>
        <View className="introduce-wrapper">
          <Text className="comp-tips">关于我们</Text>
          <View className="bussiness-introduce">
            蓉汇政通科技 & 事务所，致力于助力中小企业数字化经营升级，提供专业快捷的工商注册、会计税务、软件开发、项目申报、知识产权等服务，让中小企业经营更简单。
          </View>
        </View>
        <View className="introduce-wrapper">
          <Text className="comp-tips">服务介绍</Text>
          <View className="bussiness-list">
            {bussinessItems.map((item, index) => <ListItem key={index} index={index} item={item} />)}
          </View>
        </View>
      </View>
    )
  }
}
