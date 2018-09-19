import React from 'react';
import './imgCard.css';

const ImgCard = props => (
  <div
    
      value={props.name}
      onClick={() => props.handleClick(props.name)}
    >
      <img data-key={props.key} className="img-thumbnail" alt={props.name} src={props.img_url} />
  </div>
);

export default ImgCard;