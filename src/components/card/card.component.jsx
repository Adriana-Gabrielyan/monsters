import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container"  onClick={() => props.handleClick(props.monster.id, props.type)}>
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.price}</p>
  </div>
);
