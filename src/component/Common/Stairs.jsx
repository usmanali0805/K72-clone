import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'


const Stairs = ({ children }) => {
    const currentPath = useLocation().pathname
    const pageref = useRef(null)

    console.log(currentPath)
    const stairParentRef = useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline()

        tl.to(stairParentRef.current,{
            display:"block",
            delay:-0.7
        })
        tl.from(".stair", {
            height:0,
            stagger:{
                amount:-0.1
            }
        })
        tl.to('.stair', {
            y:'100%',
            stagger:{
                amount:-0.1
            }
        })
        tl.to(stairParentRef.current,{
            display:"none"
        })
        tl.to('.stair', {
            y:'0%'
        })


        gsap.from(pageref.current,{
            opacity:0,
            duration:2,
            scale:1.1
            
        })
    },[currentPath])
  return (
    <div>
    <div ref={stairParentRef} className='w-full h-screen fixed z-20 top-0'>
        <div className='h-full w-full flex'>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
        </div>
    </div>
    <div ref={pageref} >

    {children}
    </div>
    </div>
  )
}

export default Stairs
