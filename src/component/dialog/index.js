import React, { useCallback } from "react";

const Index = ({ dialog, setDialog }) => {
  const closeDialog = useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  return (
    <>
      {dialog && (
        <>
          <div className="dialogBg" onClick={closeDialog} />
          <div className="dialogContent">{dialog}</div>
        </>
      )}
    </>
  );
};

export default React.memo(Index, () => false);
