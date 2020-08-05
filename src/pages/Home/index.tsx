/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-29 18:25:07
 */ 

 import   React ,{useEffect}from 'react'
 import Banner from './components/banner'

 import  homeService from '../../service/homeService'

 import './style/index.less'



 function Home(props:any){
      useEffect(()=>{ 
         homeService.systime().then((res:any)=>{
            console.log(res)
         })
      },[])
    return <Banner />
 }

 export default Home