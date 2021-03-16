import { useState, useCallback } from "react";

export default () => {
  const [tab, setState] = useState("pc");

  const setTab = useCallback(
    type => {
      setState(type);
    },
    [setState]
  );

  return [tab, setTab];
};
