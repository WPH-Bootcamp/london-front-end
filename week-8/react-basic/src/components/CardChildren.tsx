import React from "react";

type CardChildrenProps = {
  name: string;
};

const CardChildren = ({ name }: CardChildrenProps) => {
  return <div>CardChildren: {name}</div>;
};

export default CardChildren;
