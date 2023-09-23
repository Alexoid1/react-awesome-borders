import * as React from 'react'
import { createAnimation } from "./helpers/animation";
import { cssValue } from "./helpers/unitConverter";

export default function SquareBorder({
  children, 
  width="inherit", 
  height="auto",
  borderWidth="12px",
  gap="4px",
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
    background: `repeating-linear-gradient(90deg, ${color}) repeat-x 25% 0,
    repeating-linear-gradient(180deg, ${color}) repeat-y 0 125%,
    repeating-linear-gradient(90deg, ${color}) repeat-x 0 125%`,
    padding: `${gap + borderWidth}`,



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
         
           {children}
         
        </div>
   
  )
}
