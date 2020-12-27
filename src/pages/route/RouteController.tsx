/*
 * @Description:
 * @Author: zhangchuangye
 * @Date: 2020-07-29 21:27:07
 */

import React, { useEffect } from "react";
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { menuList } from './routeList'
import Transfer from "../Transfer/index";
import BottomNav from './BottomNav.tsx'

import "./route.less";

function RouteController(props: any) {
  console.log('RouteController',props)
  return (
    <Router>
      <Switch>
        <Route path="/content">
          <Content />
        </Route>
        <Route path="/">
          <Transfer  />
        </Route>
      </Switch>
    </Router>
  );
}

function Content(props: any) {
  const navList = menuList

 
  return (
    <section>
      <Switch>
        {
          navList.map((item: any, index: number) => {
            const { path, component: Component } = item
            return <Route path={path} key={path}>
              <Component />

            </Route>
          })
        }
      </Switch>
      <BottomNav />
    </section>
  );
}






// const mapStateToProps = (state: any) => {
//   return {
//     currentPath: state.currentPath
//   }
// }

// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//     setCurrentMenuList: (path: string) => dispatch({
//       type: 'CHANGE_NAV',
//       path
//     })
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(RouteController);
export default RouteController;
