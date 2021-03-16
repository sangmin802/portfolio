import React from "react";

const Index = ({ name, url }) => {
  const goPath = React.useCallback(() => {
    window.open(url);
  }, [url]);

  return (
    <div className="linkBtn rem1" onClick={goPath}>
      {name}
    </div>
  );
};

export default React.memo(Index, () => true);
