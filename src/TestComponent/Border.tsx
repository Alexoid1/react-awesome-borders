import * as React from 'react'
import { createAnimation } from "./helpers/animation";

export default function Border({children}) {
  
  const toTop= createAnimation(
    "to-top",
    `100% { bottom: 200% }`
  );

  const toBottom= createAnimation(
    "to-bottom",
    `100% { top: 200% }`
  );

  const toRight= createAnimation(
    "to-right",
    `100% { left: 200% }`
  );

  const toLeft= createAnimation(
    "to-left",
    `100% { right: 200% }`
  )

  const wrapper : React.CSSProperties ={
    marginInline: "auto",
    position: "relative",
    width: "200px",
    height: "500px",
    backgroundColor: "white",
    overflow: "hidden"
  }


  const cardLineLeft : React.CSSProperties={
    position: "absolute",
    animation: `${toTop} 1s linear infinite`,
    background: "linear-gradient(to bottom, #2bd9e9, #5c60e200)",
    left: "0",
    bottom: "-100%",
    width: "5px",
    height: "100%",
   
  }

  const cardLineRight : React.CSSProperties={
    position: "absolute",
    animation: `${toBottom} 1s linear infinite`,
    background: "linear-gradient(to bottom, #5c60e200, #2bd9e9)",
    right: "0",
    top: "-100%",
    width: "5px",
    height: "100%"
  }

  const cardLineTop : React.CSSProperties={
    position: "absolute",
    animation: `${toRight} 1s linear infinite`,
    animationDelay: "1.5s",
    background: "linear-gradient(to right, #5c60e200, #2bd9e9)",
    top: "0",
    width: "100%",
    height: "5px",
    left: "-100%"
  }

  const cardLineBottom : React.CSSProperties={
    position: "absolute",
    animation: `${toLeft} 1s linear infinite`,
    animationDelay: "1.5s",
    background: "linear-gradient(to right, #2bd9e9, #5c60e200)",
    bottom: "0",
    right: "-100%",
    width: "100%",
    height: "5px"
  }
  return (
    <div style={wrapper}>
      <div aria-hidden="true" >
        <span style={cardLineLeft}></span>
        <span style={cardLineRight}></span>
        {children}
        <span style={cardLineTop}></span>
        <span style={cardLineBottom}></span>
      </div>
    </div>
  )
}
