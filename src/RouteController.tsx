/*
 * @Description:
 * @Author: zhangchuangye
 * @Date: 2020-07-29 21:27:07
 */

import  React,{ useState } from "react";
 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home/index";
import My from "./pages/My/index";
import Transfer from "./pages/transfer/index";

import "./common/style/route.less";

 function RouteController() {
  return (
    <Router>
      <Switch>
        <Route path="/content">
          <Content />
        </Route>
        <Route path="/">
          <Transfer />
        </Route>
      </Switch>
    </Router>
  );
}

function Content() {
  return (
    <section>
      <Switch>
        <Route path="/content/home">
          <Home />
        </Route>
        <Route path="/content/my">
          <My />
        </Route>
      </Switch>
      <BottomNav  />
    </section>
  );
}



function BottomNav() {

  const [current, setCurrent] = useState(0);
  const [navList, setNavList] = useState([
    {
      text: "首页",
      icon: "tab_home.png",
      iconActive: "tab_home_active.png",
    },
    {
      text: "分类",
      icon: "tab_class.png",
      iconActive: "tab_class_active.png",
    },
    {
      text: "我的",
      icon: "tab_my.png",
      iconActive: "tab_my_active.png",
    },
  ]);
 const handleChangeNav=(index: any)=>{
    setCurrent(index) 
  }


  return (
    <>
      <ul className="nav_list flex-h-c-sb">
        {navList.map((item, index) => {
          return (
            <li key={item.icon} className="flex-v-c-c" onClick={()=>{
              handleChangeNav(index)
            }}>
              <img
                className="icon_nav"
                src={require(`../src/images/${current===index?item.iconActive:item.icon}`)}
                alt=""
              />
              <div>{item.text}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}


export default RouteController;
