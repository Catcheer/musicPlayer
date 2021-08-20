/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-07-29 18:25:45
 */

import React from 'react'

import useLoading from './useCanvas'

function My() {
    useLoading(null);
    const handleLoadingShow = () => {
        window.controlLoadingVisible(true)
    }

    return (<section>
        <div>my</div>
        <div>
        <button onClick={handleLoadingShow}>showloading</button>
        </div>
        <canvas id="canvas" width='200' height='200' ></canvas>
    </section>)
}

export default My