import React from 'react';
import "./style.css"

function Button({text, onClick, outLined}) {
  return (
    <button className={outLined ? "outlined-btn" : "btn"} 
    onClick={()=> onClick()}
    >
      {text}
    </button>
  )
}

export default Button

