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
    return <section className="warp">
        <div>{props.count}</div>
        <button onClick={handleAdd}>add 1</button>
        <Center />
    </section>
}


const mapStateToProps=(state:any)=>{
    console.log('state----------',state)
        return {count:state.count}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleAdd:()=>{
            dispatch({type:"ADD"})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Transfer)