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


const loadingVisible=(loadingVisible:Boolean=false,action:ActionType)=>{
    const {type}=action
   
    switch(type){
            case "LOADING_SHOW":
            return true
            break;
            case "LOADING_HIDE":
            return false
            break;
        default:
            return loadingVisible
    }
}

 const AppStore=combineReducers({
    count,
    loadingVisible,
    ...route
 })

 export default AppStore