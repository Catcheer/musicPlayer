/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-30 10:48:40
 */


import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import Center from './components/center'

import './style/index.less'

function Transfer(props:any) {
    console.log('Transfer')
    useEffect(() => {

    })

    const handleAdd=()=>{
            props.handleAdd()
    }

    const handleShowLoading=()=>{
        // props.handleShowLoading()
        window.controlLoadingVisible(true)
    }

    return <section className="warp">
        <div>{props.count}</div>
        <button onClick={handleAdd}>add 1</button>
        <div>
            <button onClick={handleShowLoading}>showLoading</button>
        </div>
        <Center />
    </section>
}


const mapStateToProps=(state:any)=>{
    console.log('state----------',state)
        return {count:state.count}
}

const mapDispatchToProps=(dispatch:Function)=>{
    return {
        handleAdd:()=>{
            dispatch({type:"ADD"})
        },
        // handleShowLoading:()=>{
        //     dispatch({type:"LOADING_SHOW"})
        // }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Transfer)