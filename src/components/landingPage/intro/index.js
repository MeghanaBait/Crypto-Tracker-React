import React from 'react'
import Buttton from '../../common/button'
import './style.css';
import phone from "../../../assets/phone.png";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';


function MainComponent() {
  return (
    <div className='mainComponent'>
      <div className="flex-info">
        <div className="left-component">
            <motion.h1
            className="track-crypto-heading"
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}}
            >Track Crypto</motion.h1>
            <motion.h1 
            className="real-time-heading"
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.5}}
            >Real Time.</motion.h1>
            <motion.p 
            className='info-text'
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.75}}
            >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
            <motion.div 
            className='btn-flex'
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.5, delay:1}}
            >
            <Link to="/dashboard">
            <Buttton 
                    text={"Dashboard"} 
                    outLined={false}
                    onClick={() => console.log("btn Clicked")}
            />
            </Link>
            <Buttton 
                    text={"Share"} 
                    outLined={true}
                    onClick={() => console.log("btn Clicked")}
            />
            </motion.div>
        </div>
        <div className="right-component">
            <motion.img 
            src={phone} 
            initial={{y:-15}}
            animate={{y:15}}
            transition={{
                type:"smooth",
                repeatType:"mirror",
                duration:2,
                repeat:Infinity
            }}
            />
        </div>
      </div>
    </div>
  )
}

export default MainComponent
