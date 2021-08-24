/*
 * @Author: zhangchuangye
 * @Date: 2021-08-20 09:56:23
 * @LastEditTime: 2021-08-24 16:56:55
 * @LastEditors: zhangchuangye
 * @Description: 
 * @FilePath: /webpack/src/useHooks/UseLoading/index.tsx
 * 
 */

import React, { useEffect } from "react"
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'



import './index.less'




function LoadingIcon() {
  return <svg width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <g transform="rotate(0 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(30 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(60 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(90 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(120 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(150 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(180 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(210 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(240 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(270 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(300 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" />
      </rect>
    </g><g transform="rotate(330 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
      </rect>
    </g>
  </svg>

}


function Loading(props: any) {

  useEffect(() => {
    let timer: any
    if (props.loadingVisible) {
      //  timer =  setTimeout(props.handleLoadingHide ,2000)
      timer = setTimeout(() => {
        window.controlLoadingVisible(false)
      }, 2000)
    }
    return () => {
      timer && clearTimeout(timer)
    }
  }, [props.loadingVisible])


  const Pop = props.loadingVisible ? <div className="loading_wrap">
    <div className="loading_conten">
      <LoadingIcon />
    </div>
  </div> : null


  return ReactDOM.createPortal(Pop, document.querySelector('#dialogWrap'))
}




const mapStateToProps = (state: any) => {
  return {
    loadingVisible: state.loadingVisible
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    // handleLoadingHide:()=>{
    //         dispatch({type:"LOADING_HIDE"})
    // }  
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Loading)