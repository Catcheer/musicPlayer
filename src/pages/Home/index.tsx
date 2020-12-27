/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-29 18:25:07
 */ 

 import   React ,{useEffect}from 'react'
 import Banner from './components/banner'

 import  homeService from '@service/homeService'

 import './style/index.less'

 import {ThemeContext} from '../../index'


 function Home(props:any){
    console.log('Home')
      useEffect(()=>{ 
         homeService.systime().then((res:any)=>{
            console.log(res)
         })
      },[])
    return <ThemeContext.Consumer >
         {(value)=>{
            console.log('value',value)
            return  <Banner />
         }}
    </ThemeContext.Consumer>
   
 }

 export default Home