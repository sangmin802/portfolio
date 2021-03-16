import React from "react";

const Index = () => {
  return (
    <div className="intro">
      <div className="myImg"></div>
      <div className="introCont textCenter rem11">
        더 나은 내일을 맞이하고자하는
        <br />
        프론트엔드 개발자 박상민 입니다.
      </div>
    </div>
  );
};

export default React.memo(Index, () => true);
