import React,{ useEffect ,useRef } from "react"
import {motion , useInView , useAnimation} from "framer-motion"

const Layout = ({children}) => {

    const variants={
        hidden: { opacity : 0 , y:75 },
        visible:{ opacity : 1 , y:0 }
    }
    const ref = useRef(null);
    const isInView = useInView(ref );

    const usingAnimation = useAnimation();

    useEffect (()=>{
        if(isInView){
            usingAnimation.start("visible");
        }
        

    }, [isInView]);
  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
        <motion.div
            variants={variants}
            initial ="hidden"
            animate = {usingAnimation}
            transition={{ type:"tween", duration:1 , delay: .25 }}
        >
            
            {children}
            
        </motion.div>
    </div>
  )
}

export default Layout