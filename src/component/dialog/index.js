import React, { useCallback } from "react";
import ScrollHook from "hook/scrollHook";
import "./index.css";

const Index = ({ dialog, setDialog }) => {
  const closeDialog = useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  ScrollHook();

  return (
    <>
      <div className="dialogBg" onClick={closeDialog} />
      <div className="dialogContent">{dialog}</div>
    </>
  );
};

export default React.memo(Index, () => false);
