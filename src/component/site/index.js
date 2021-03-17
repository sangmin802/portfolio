import React from "react";
import Section from "layout/section";
import Link from "component/link/index";
import { SITE } from "json/json";
import "./index.css";

const Index = () => {
  return (
    <Section title="개인 사이트">
      {SITE.map(({ name, url }) => (
        <Link key={name} name={name} url={url} />
      ))}
    </Section>
  );
};

export default React.memo(Index, () => true);
