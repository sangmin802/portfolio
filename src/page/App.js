import React from "react";
import Intro from "component/intro/index";
import Call from "component/call/index";
import Stack from "component/stack/index";
import Site from "component/site/index";
import Project from "component/project/index";
import Dialog from "component/dialog/index";
import DialogHook from "hook/dialogHook";

import "style/app.css";
import "style/projectPop.css";

const App = () => {
  const [dialog, setDialog] = DialogHook();

  return (
    <div className="App">
      <Dialog dialog={dialog} setDialog={setDialog} />
      <div className="innerApp">
        <Intro />
        <Call />
        <Stack />
        <Site />
        <Project setDialog={setDialog} />
      </div>
    </div>
  );
};

export default App;
