/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-12-27 17:49:05
 */

import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import { menuList } from './routeList'

function BottomNav(props: any) {
   console.log('BottomNav')
    const  navList  = menuList
  
    const current = props.currentPath
    const handleChangeNav = (obj: any) => {
      props.setCurrentMenuList(obj.path)
      props.history.push(obj.path)
  
    }
  
  useEffect(()=>{
      console.log(props)
      const {location:{
        pathname
      }}=props
      if(!current || (current!==pathname)){
        props.setCurrentMenuList(pathname)
      }
  },[])
  
    return (
      <>
        <ul className="nav_list flex-h-c-sb">
          {navList.map((item: any, index: number) => {
            return (
              <li key={item.icon} className="flex-v-c-c" onClick={() => {
                handleChangeNav(item);
  
              }}>
                <img
                  className="icon_nav"
                  src={require(`@images/${current === item.path ? item.iconActive : item.icon}`)}
                  alt=""
                />
                <div className={current === item.path ? 'txt  active_txt' : 'txt'}>{item.text}</div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  const mapStateToProps = (state: any) => {
    return {
      currentPath: state.currentPath
    }
  }
  
  const mapDispatchToProps = (dispatch: Function) => {
    return {
      setCurrentMenuList: (path: string) => dispatch({
        type: 'CHANGE_NAV',
        path
      })
    }
  }
  
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BottomNav));