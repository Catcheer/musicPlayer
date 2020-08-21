/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-28 18:20:55
 */ 

import  React from 'react'
import  ReactDOM from 'react-dom'
import { ConfigProvider, DatePicker, message, Alert } from 'antd';


import RouteController from './RouteController'


import './common/style/index.less'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');

function App(){
    return <ConfigProvider locale={zhCN}>
    <div>
      <RouteController />
    </div>
    </ConfigProvider>
}
ReactDOM.render(<App />,document.querySelector('#app'))

if ((module as any).hot) {
  (module as any).hot.accept()
}

