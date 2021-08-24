/*
 * @Author: zhangchuangye
 * @Date: 2021-08-24 16:44:08
 * @LastEditTime: 2021-08-24 17:58:32
 * @LastEditors: zhangchuangye
 * @Description: 
 * @FilePath: /webpack/src/useHooks/useDialog/index.tsx
 * 
 */
import React, {useLayoutEffect } from "react"
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './index.less'



function Dialog(props: any) {


    useLayoutEffect(()=>{
        let timer :any =null
        if(props.show){
            timer=  setTimeout(()=>{
                document.querySelector('#dialogId').classList.add('show')
            },10)
        }

        return ()=>{
            timer && clearTimeout(timer)
        }
    },[props.show])

    const handleCancel = () => {
        props.onCancel()
    }

    const handleConfirm = () => {
        props.onConfirm()
    }

    const Pop = <section className="dialog_wrap">
        <div className="main" id="dialogId">
            <div className="head">{props.title}</div>
            <div className="body">{props.content}</div>
            <div className="footer">
                {
                    props.onCancel ? <React.Fragment>
                        <button onClick={handleCancel} className="cancel">取消</button>
                        <button onClick={handleConfirm} className="confirm">确定</button>
                    </React.Fragment> :
                        <React.Fragment>
                            <button onClick={handleConfirm} className="confirm">确定</button>
                        </React.Fragment>
                }
            </div>
        </div>
    </section>


    return ReactDOM.createPortal(Pop, document.querySelector('#dialogWrap'))
}


Dialog.propTypes = {
    show:PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func.isRequired
}

Dialog.defaultProps = {
    title: 'this is title',
    content: 'content',
    // onCancel: () => {
    //     console.log('clicked cancel')
    // },
    onConfirm: () => {
        console.log('clicked confirm')
    }
}


export default Dialog