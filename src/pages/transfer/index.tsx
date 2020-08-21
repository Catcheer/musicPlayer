/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-30 10:48:40
 */


import React, { useEffect } from 'react'


import Left from './components/left'
import Center from './components/center'
import Right from './components/right'

import './style/index.less'

function Transfer() {
    useEffect(() => {

    })
    return <section className="warp">
        <div className="left">
            <Left />
        </div>
        <div className="center">
            <Center />
        </div>
        <div className="right">
            <Right />
        </div>

    </section>
}
export default Transfer