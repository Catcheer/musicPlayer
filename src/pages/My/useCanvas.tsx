/*
 * @Author: zhangchuangye
 * @Date: 2021-08-20 16:49:24
 * @LastEditTime: 2021-08-20 16:52:18
 * @LastEditors: zhangchuangye
 * @Description: 
 * @FilePath: /webpack/src/pages/My/useCancas.tsx
 * 
 */

import React,{useLayoutEffect} from 'react'

function useLoading(props:any){
    useLayoutEffect(() => {
        const canvas:any = document.querySelector('#canvas');
        const content = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const rad = Math.PI*2/100;
        let speed = 0.1;

        function blueCircle(n:Number=100){
            content.save();
            content.beginPath();
            content.strokeStyle="#49f";
            content.lineWidth=8;
            content.arc(centerX, centerY, 50 , -Math.PI/2, -Math.PI/2 + n*rad, false);
            content.stroke();
            content.restore();
        }

        function whiteCircle(){
            content.save();
            content.beginPath();
            content.strokeStyle="#A5DEF1";
            content.lineWidth=8;
            content.arc(centerX,centerY,50,0,Math.PI*2,false);
            content.stroke();
            content.restore();
        }

        function text(n:Number){
            content.save();
            content.fillStyle = "#F47C7C";
            content.font = "20px Arial";
            content.textAlign = "center";
            content.textBaseline = "middle";
            content.fillText(n.toFixed(0)+"%", centerX, centerY);
            content.restore();
        }


        (function drawFrame(){
            window.requestAnimationFrame(drawFrame, canvas);
            content.clearRect(0, 0, canvas.width, canvas.height);
                
            whiteCircle();
            text(speed);
            blueCircle(speed);
                   
            // if(speed > 100) speed = 0;
            // speed += 0.1;
            if(speed>100) {
                return
            }
            speed += 0.1;
       }());

    }, [])
}

export default useLoading