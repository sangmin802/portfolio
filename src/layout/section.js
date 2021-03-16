import React from "react";
import _ from "lodash";

const Index = ({ children, title }) => {
  return (
    <div className="section">
      <div className="sectionTitle rem11">{title}</div>
      <div className="sectionCont">{children}</div>
    </div>
  );
};

export default React.memo(Index, (left, right) => _.isEqual(left, right));
