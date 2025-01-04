import { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import './Detail.css';

export function Detail ({ title, description }) {
  const [state, setState] = useState(false);
  
  return (
    <div 
      className="Detail"
      onClick={() => setState(!state)}
    >
      <div className="Detail-title">
        <h4>{title}</h4>
        <span>
          {state 
            ? <FaMinusSquare />
            : <FaPlusSquare />
          }
        </span>
      </div>
      <p className={state ? "Detail-description active" : "Detail-description"}>{description}</p>
    </div>
  )
}

