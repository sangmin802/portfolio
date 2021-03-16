import { useState, useCallback } from "react";

export default () => {
  const [dialog, setState] = useState(null);

  const setDialog = useCallback(
    dialog => {
      setState(dialog);
    },
    [setState]
  );

  return [dialog, setDialog];
};
