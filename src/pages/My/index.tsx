/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-29 18:25:45
 */

import * as React from 'react'



function My() {

    const handleLoadingShow = () => {
        window.controlLoadingVisible(true)
    }


    return (<section>
        my
        <button onClick={handleLoadingShow}>showloading</button>
    </section>)
}

export default My