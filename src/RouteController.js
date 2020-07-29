/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-29 21:27:07
 */ 

 import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  import Home from './pages/Home/index.js'


function RouterController(){
    return <Router>
        <Switch>
            <Route path='/'>
                <div>  outer</div>
                <Link to="/home">Home</Link>
                <Route path='/home'>
                    <Test />
                </Route>
        </Route>
        </Switch>
    </Router>
}


function Test(){
    return  <Switch>
    <Route path='/home'>
        <Home />
    </Route>
</Switch>
}

export default RouterController

