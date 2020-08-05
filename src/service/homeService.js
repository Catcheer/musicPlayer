/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-08-03 15:10:37
 */ 

import Request from '../util/request'


 export default {
     systime(){
        return Request.get('http://communitygroup-dev.yh-grouppurchase-activitycenter.devapis.yonghui.cn//mnp/agent/activity/sysdate')  
     },
     randomProductList(){
        return Request.get('http://communitygroup-dev.yh-grouppurchase-activitycenter.devapis.yonghui.cn//mnp/agent/activity/sysdate','GET',)  
     }
 }



