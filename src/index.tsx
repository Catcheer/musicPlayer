/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-28 18:20:55
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { hot } from 'react-hot-loader/root';


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store'
import Loading from './useHooks/UseLoading/index';


import RouteController from './pages/route/RouteController'

import { ConfigProvider } from 'antd';
import './common/style/index.less'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}


 window.controlLoadingVisible = (type: Boolean)=> {
  if (type) {
    store.dispatch({
      type: "LOADING_SHOW"
    })
    return
  }
  store.dispatch({
    type: "LOADING_HIDE"
  })
}



const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : (f: any) => f
))
// let persistor = persistStore(store)

export const ThemeContext = React.createContext('light')


function App() {
  return <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ThemeContext.Provider value={'dark'}>
        <Loading />
      
        <RouteController />
      </ThemeContext.Provider>
      {/* </PersistGate> */}
    </Provider>
  </ConfigProvider>
}

const HotApp = hot(App)

ReactDOM.render(<HotApp />, document.querySelector('#app'))

if ((module as any).hot) {
  (module as any).hot.accept()
}

