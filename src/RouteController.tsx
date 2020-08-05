/*
 * @Description:
 * @Author: zhangchuangye
 * @Date: 2020-07-29 21:27:07
 */

import  React,{ useState } from "react";
 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

import Home from "./pages/Home/index";
import My from "./pages/My/index";
import Category from './pages/Category/index'
import Transfer from "./pages/Transfer/index";
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

  const [navList,setNavList]=useState([
    {
      text: "首页",
      icon: "tab_home.png",
      iconActive: "tab_home_active.png",
      path:"/content/home",
      component:Home
    },
    {
      text: "分类",
      icon: "tab_class.png",
      iconActive: "tab_class_active.png",
      path:"/content/category",
      component:Category
    },
    {
      text: "我的",
      icon: "tab_my.png",
      iconActive: "tab_my_active.png",
      path:"/content/my",
      component:My
    },

  ])

  const BottomNavWithRouter=withRouter(React.memo(BottomNav))

  return (
    <section>
      <Switch>
        {
          navList.map((item,index)=>{
            const {path,component:Component}=item
            return <Route path={path} key={path}>
                <Component />
            </Route>
          })
        }
      </Switch>
      <BottomNavWithRouter  navList={navList}  />
    </section>
  );
}



function BottomNav(props:any) {
  const [current, setCurrent] = useState(props.navList[0]);
  const {navList}=props

 
  
  console.log('props',props)
 
 const handleChangeNav=(obj: any)=>{
    setCurrent(obj) 
    props.history.push(obj.path)
    
  }

  return (
    <>
      <ul className="nav_list flex-h-c-sb">
        {navList.map((item:any, index:number) => {
          return (
            <li key={item.icon} className="flex-v-c-c" onClick={()=>{
              handleChangeNav(item);
              
            }}>
              <img
                className="icon_nav"
                src={require(`../src/images/${current.path===item.path?item.iconActive:item.icon}`)}
                alt=""
              />
              <div className={ current.path===item.path?'txt  active_txt':'txt'}>{item.text}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}


export default RouteController;
