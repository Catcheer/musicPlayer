/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-08-25 15:58:38
 */

import { combineReducers } from 'redux' // 数据合并


import route from './pages/route/redux/reducer'

interface ActionType{
    type:string,
}


const  count=(state:number=0,action:ActionType)=>{
    const {type}=action
    switch(type){
            case "ADD":
            return state+1 
        default:
            return state
    }
}


 const AppStore=combineReducers({
    count,
    ...route
 })

 export default AppStore