import React from 'react';
import "./style.css"

function Button({text, onClick, outLined}) {
  return (
    <div className={outLined ? "outlined-btn" : "btn"} 
    onClick={()=> onClick()}
    >
      {text}
    </div>
  )
}

export default Button

