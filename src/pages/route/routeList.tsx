

import Home from "../Home/index";
import My from "../My/index";
import Category from '../Category/index'


export const menuList =  [{
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
  },]


   