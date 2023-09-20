export const createAnimation = (borderName: string, frames: string): string => {
    const animationName = `${borderName}`;
  
    if (typeof window == "undefined" || !window.document) {
      return animationName;
    }
  
    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;
  
    const keyFrames = `
      @keyframes ${animationName} {
        ${frames}
      }
    `;
  
    if (styleSheet) {
      styleSheet.insertRule(keyFrames, 0);
    }
  
    return animationName;
};