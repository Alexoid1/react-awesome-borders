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
    `0  linear-gradient(0deg, ${color}, #c3f2ff, #b00)
    100% linear-gradient(360deg, ${color}, #c3f2ff, #b00)`
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
    background: `linear-gradient(0deg, ${color}, #c3f2ff, #b00)`,
   
   
  }

  const after : React.CSSProperties={
    position: "absolute",
    content: "",
    inset: "-0.2rem",
    zIndex: "-1",
    animation: `${rotate} 10s linear infinite`,
    background: `linear-gradient(0deg, ${color}, #c3f2ff, #b00)`,
    
  }

  
  return (
    <div style={before}>
        <div style={wrapper} {...additionalprops}>
            <div style={after}>  
                {children}
            </div>
        </div>
    </div>
  )
}
