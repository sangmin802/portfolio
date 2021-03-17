import { PORT_DATA } from "json/json";
import React from "react";
import Section from "layout/section";
import Tab from "component/tab/index";
import Item from "./item/index";
import TabHook from "hook/tabHook";
import "./index.css";

const Index = ({ setDialog }) => {
  const [tab, setTab] = TabHook();
  const pc = PORT_DATA.filter(data => data.pc);
  const mobile = PORT_DATA.filter(data => data.mobile);

  return (
    <Section title="연락처">
      <div className="projectTabWrap">
        {["pc", "mobile"].map(tab => {
          return <Tab key={tab} name={tab} setTab={setTab} />;
        })}
      </div>
      <div
        className={`projectsWrap ${
          tab === "pc" ? "displayFlex" : "displayNone"
        }`}
      >
        {pc.map(cont => {
          return (
            <Item key={cont.id} cont={cont} type="pc" setDialog={setDialog} />
          );
        })}
      </div>
      <div
        className={`projectsWrap ${
          tab === "mobile" ? "displayFlex" : "displayNone"
        }`}
      >
        {mobile.map(cont => {
          return (
            <Item
              key={cont.id}
              cont={cont}
              type="mobile"
              setDialog={setDialog}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default React.memo(Index, () => true);
