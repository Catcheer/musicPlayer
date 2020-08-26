/*
 * @Description:
 * @Author: zhangchuangye
 * @Date: 2020-07-29 21:27:07
 */

import React, { useEffect } from "react";
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { menuList } from './routeList'
import Transfer from "../Transfer/index";

import "./route.less";

function RouteController(props: any) {
  return (
    <Router>
      <Switch>
        <Route path="/content">
          <Content {...props} />
        </Route>
        <Route path="/">
          <Transfer />
        </Route>
      </Switch>
    </Router>
  );
}

function Content(props: any) {
  const navList = menuList

  const BottomNavWithRouter = withRouter(React.memo(BottomNav))
  return (
    <section>
      <Switch>
        {
          navList.map((item: any, index: number) => {
            const { path, component: Component } = item
            return <Route path={path} key={path}>
              <Component {...props} />

            </Route>
          })
        }
      </Switch>
      <BottomNavWithRouter navList={navList} {...props} />
    </section>
  );
}



function BottomNav(props: any) {
  const { navList } = props

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


export default connect(mapStateToProps, mapDispatchToProps)(RouteController);
