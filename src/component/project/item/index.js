import React, { useCallback } from "react";
import Detail from "component/detail/index";

function Index({ cont, type, setDialog }) {
  const { name, lib, refactoring } = cont;

  const selectProject = useCallback(() => {
    const detail = <Detail data={cont} type={type} />;
    setDialog(detail);
  }, [cont, type, setDialog]);

  const img = type === "pc" ? cont.pcImg : cont.mobileImg;

  return (
    <div className={`${type}Project`} onClick={selectProject}>
      <div className="projectBg">
        <div className={`pointer${type} pointer`}>
          <img
            className="imgWidth"
            src={`${process.env.PUBLIC_URL}/img/pointer.png`}
            alt="pointer"
          />
        </div>
        <div className="projectCont">
          {refactoring && <div className="rem08 refactoring">리팩토링</div>}
          <div className="projectContName rem1 textCenter">{name}</div>
          <div className="projectContLib rem09 textCenter">{lib}</div>
        </div>
      </div>
      <div className={`${type}ProjectImg`}>
        <img
          className="imgWidth"
          src={`${process.env.PUBLIC_URL}/img/projectImg/${img[1]}`}
          alt={name}
        />
      </div>
    </div>
  );
}

export default React.memo(Index, () => true);
