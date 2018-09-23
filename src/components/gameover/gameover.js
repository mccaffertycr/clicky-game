import React from 'react';
import './gameover.css';

const GameOver = (props) => {
  if (props.score >= 12) {
    return(
      <div className="winner text-center container-fluid">  
        <button className="new-game btn" onClick={() => props.handleClick(props.gameover)}>new game</button>
      </div>
    )
  } else {
    return(
      <div className="container gameover text-center">
        {props.msg}
      </div>
    )
  }
}
;

export default GameOver;
