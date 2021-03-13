import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
    
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card type={props.type} key={monster.id} monster={monster} handleClick={props.handleClick}  />
      ))}
    </div>
  );
};
