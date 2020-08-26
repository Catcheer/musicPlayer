/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-08-25 18:00:54
 */


import {menuList} from '../routeList'

const defaultPath=menuList &&  menuList[0].path

export default {
    currentPath(state=defaultPath,action){
        const {type,path}=action
        switch (type){
            case "CHANGE_NAV":
                return path
            default:
                return state
        }

       
        
    }
}