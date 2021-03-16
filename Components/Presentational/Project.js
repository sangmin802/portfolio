import React from 'react';

function Project({cont, type, selectProject}){
  const {name, lib, refactoring} = cont;
  let imgWrap = null;
  switch(type){
    case 'pc' : imgWrap = cont.pcImg
    break;
    case 'mobile' : imgWrap = cont.mobileImg
    break;
    default : return null;
  }
  return (
    <div className={`${type}Project`}
      onClick={() => {selectProject(cont, type)}}
    >
      <div className="projectBg">
        <div className={`pointer${type} pointer`}>
          <img className="imgWidth" src="/portfolio/img/pointer.png" alt="pointer"/>
        </div>
        <div className="projectCont">
          {refactoring &&
            <div className="rem08 refactoring">리팩토링</div>
          }
          <div className="projectContName rem1 textCenter">{name}</div>
          <div className="projectContLib rem09 textCenter">{lib}</div>
        </div>
      </div>
      <div className={`${type}ProjectImg`}>
        <img className="imgWidth" src={`/portfolio/img/projectImg/${imgWrap[1]}`} alt={name} />
      </div>
    </div>
  )
}

export default React.memo(Project, () => (true));