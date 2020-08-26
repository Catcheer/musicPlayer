/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-30 10:48:40
 */


import React, { useEffect } from 'react'

import { connect } from 'react-redux'

// import Left from './components/left'
// import Center from './components/center'
// import Right from './components/right'

import './style/index.less'

function Transfer(props:any) {
    useEffect(() => {

    })
    return <section className="warp">
        {props.count}
        {/* <div className="left">
            <Left />
        </div>
        <div className="center">
            <Center />
        </div>
        <div className="right">
            <Right />
        </div> */}

    </section>
}


const mapStateToProps=(state:any)=>{
    console.log('state',state)
        return {count:state.count}
}

export default connect(mapStateToProps)(Transfer)