import React from "react";
import Section from "layout/section";
import "./index.css";

const Index = () => {
  return (
    <Section title="연락처">
      <div className="emailTitle">이메일</div>
      <div className="emailCont">
        <div className="emailNaver">sangmin802@naver.com</div>
        <div className="emailNaver">sangmin802@gmail.com</div>
      </div>
    </Section>
  );
};

export default React.memo(Index, () => true);
