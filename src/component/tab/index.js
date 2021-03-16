import React from "react";

function Index({ name, setTab }) {
  const selectTab = React.useCallback(() => {
    setTab(name);
  }, [name, setTab]);

  return (
    <div className="rem1 textCenter" onClick={selectTab}>
      {name.toUpperCase()}
    </div>
  );
}

export default React.memo(Index, () => true);
