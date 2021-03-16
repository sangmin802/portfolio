import React from "react";
import Item from "../item/index";
import { STACKS } from "json/json";

function Index({ name, index }) {
  return (
    <div className="stackDivideWrap">
      <div className="stackDivide rem1">{name}</div>
      <div className="stackWrap">
        {STACKS[index].map(stack => {
          return <Item key={stack.name} stack={stack} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(Index, () => true);
