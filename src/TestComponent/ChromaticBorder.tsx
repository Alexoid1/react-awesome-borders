import * as React from 'react'
import { createAnimation } from "./helpers/animation";
import { cssValue } from "./helpers/unitConverter";

export default function ChromaticBorder({
  children, 
  width="inherit", 
  height="auto",
  borderWidth="5px",
  color="#032146",
  ...additionalprops
        }) {
  
  const rotate= createAnimation(
    "rotate",
    `0%  { background-position: 0 0 }
    50% { background-position: 400% 0 }
    100% { background-position: 0 0 }`
  );



  const wrapper : React.CSSProperties ={
    position: "relative",
    width: cssValue(width),
    height: cssValue(height),
    backgroundColor: "white",
    padding: "4px"


  }


  const before : React.CSSProperties={
    position: "absolute",
    content: "",
    inset: "-0.2rem",
    zIndex: "-1",
    animation: `${rotate} 10s linear infinite`,
    background: `linear-gradient(45deg, ${color}, #c3f2ff, #b00)`,
    backgroundSize: '400%'
   
   
  }

  const after : React.CSSProperties={
    position: "absolute",
    content: "",
    inset: "-0.2rem",
    zIndex: "-1",
    animation: `${rotate} 10s linear infinite`,
    background: `linear-gradient(45deg, ${color}, #c3f2ff, #b00)`,
    backgroundSize: '400%'
  }

  
  return (
   
        <div style={wrapper} {...additionalprops}>
           <span style={before}></span>
           {children}
            <span style={after}>  
               
            </span>
        </div>
   
  )
}
