import React from 'react';
import '../index.css';

export default function Square(props) {
    return (
      <button className={"square " + props.shade}
      onClick={props.onClick}
      style={props.image}>
        <div className = "hp-atk">
          <span className="hp">
            {props.hp &&
            props.hp}
          </span>
          <span className="atk">
            {props.hp && props.atk
            }
          </span>
        </div>
      </button>
    );
  
}