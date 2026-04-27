import React from "react";
import CardChildren from "./CardChildren";

type CardProps = {
  name: string;
};

function Card({ name }: CardProps) {
  return (
    <div>
      <CardChildren name={name} />
    </div>
  );
}

export default Card;
