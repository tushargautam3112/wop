import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
// import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function useLocoScroll(){
    useEffect(()=>{
        const scrollEl = document.querySelector('#main-container')
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        })
        locoScroll.on('scroll', ({ limit, scroll }) => {
            const progress = scroll.y / limit.y * 15
            document.getElementById("slide1").style.transform = `translateX(${'-'+progress+'%'})`;
            document.getElementById("slide2").style.transform = `translateX(${progress+'%'})`;
            document.getElementById("slide3").style.transform = `translateX(${'-'+progress+'%'})`;
            document.getElementById("slide4").style.transform = `translateX(${progress+'%'})`;
          })

        new ResizeObserver(() => locoScroll.update()).observe(document.querySelector("[data-scroll-container]"))
    },[])
}