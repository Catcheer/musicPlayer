
import React, { useRef } from 'react'


function Left() {
    let typeList = useRef([
        { text: '团长分享商品', code: '1204' },
        { text: '专门用于直播分享商品', code: '1205' },
        { text: '分享活动页', code: '1300' },
        { text: '分享商城', code: 122 }
    ])

    return <section>{
        typeList.current.map(item => (<div className="item" key={item.code}>
            {item.text}
        </div>))
    }</section>
}


export default Left