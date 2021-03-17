import React from "react";
import Section from "layout/section";
import StackWrap from "./stackWrap/index";
import "./index.css";

const Index = () => {
  return (
    <Section title="기술스택">
      {["FrontEnd", "BackEnd", "Android", "Etc"].map((name, index) => {
        return <StackWrap key={name} name={name} index={index} />;
      })}
    </Section>
  );
};

export default React.memo(Index, () => true);
