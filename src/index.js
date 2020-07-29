/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-28 18:20:55
 */ 

 import React from 'react'
 import ReactDOM from 'react-dom'


 import RouteController from './RouteController.js'



function App(){
    return <div>
        <RouteController />
    </div>
}

ReactDOM.render(<App />,document.querySelector('#app'))
