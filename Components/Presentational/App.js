import React, { useEffect, useCallback, useState } from "react";
import "../css/App.css";

function App({
  closePop,
  selectProject,
  resetPageYOffset,
  selectProjectType,
  projectPop,
  MY_CODING,
  STACKS,
  data,
  props,
  Project,
  Stack,
  StackWrap,
  TabBtn,
}) {
  const [state, setState] = useState({ isReady: false });
  const { projectTab, popupBg, pageYOffset } = props;

  AfterDomCreated(state, setState);
  ReturnToBeforeHeight(popupBg, pageYOffset, resetPageYOffset);

  let projectType = "pc";
  if (projectTab === 1) projectType = "mobile";
  const projectsWrap = createPorjectsWrap(data, projectType);
  const { movingTab } = CreateUseCallbackMethods(state.isReady);

  return (
    <div className={`App ${popupBg ? "App100vh" : ""}`}>
      <div className="backgroundMyCoding">
        {MY_CODING.map((img, index) => {
          let opacity = 0;
          if (index === 0) opacity = 1;

          return (
            <img
              className="myCodingImg"
              style={{ opacity }}
              src={`/portfolio/img/${img}`}
              alt={img}
              key={img}
            />
          );
        })}
      </div>
      <div
        className="appBg"
        style={{ display: popupBg ? "block" : "none" }}
        onClick={closePop}
      ></div>
      {projectPop}
      <div className="sectionMoveTabWrap">
        <div className="sectionMoveTabInnerWrap">
          {["홈", "연락처", "기술스택", "개인 사이트", "프로젝트"].map(
            (btn, index) => {
              return (
                <TabBtn
                  key={btn + index}
                  data={btn}
                  index={index}
                  selectTab={movingTab}
                  type="sectionMoveTab"
                  isReady={state.isReady}
                />
              );
            }
          )}
        </div>
      </div>
      <div
        className="innerApp"
        style={{
          top: `${popupBg ? `-${pageYOffset}px` : ""}`,
        }}
      >
        <div className="intro">
          <div className="myImg"></div>
          <div className="introCont textCenter rem11">
            더 나은 내일을 맞이하고자하는
            <br />
            프론트엔드 개발자 박상민 입니다.
          </div>
        </div>
        <div className="sectionWrap">
          <div className="section1 section">
            <div className="sectionTitle rem11">연락처</div>
            <div className="section1Cont sectionCont flex">
              <div className="emailTitle">이메일</div>
              <div className="emailCont">
                <div className="emailNaver">sangmin802@naver.com</div>
                <div className="emailNaver">sangmin802@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="section2 section">
            <div className="sectionTitle rem11">기술스택</div>
            <div className="section2Cont sectionCont">
              {["FrontEnd", "BackEnd", "Android", "Etc"].map((name, index) => {
                return (
                  <StackWrap
                    key={name + index}
                    name={name}
                    index={index}
                    STACKS={STACKS}
                    Stack={Stack}
                  />
                );
              })}
            </div>
          </div>
          <div className="section3 section">
            <div className="sectionTitle rem11">개인 사이트</div>
            <div className="section3Cont sectionCont">
              <div
                className="linkBtn rem1"
                onClick={() => {
                  window.open("https://github.com/sangmin802");
                }}
              >
                깃허브
              </div>
              <div
                className="linkBtn rem1"
                onClick={() => {
                  window.open("https://sangmin802.github.io/");
                }}
              >
                기술 블로그
              </div>
            </div>
          </div>
          <div className="section4 section">
            <div className="sectionTitle rem11">프로젝트</div>
            <div className="projectTabWrap">
              {["PC", "MOBILE"].map((tab, index) => {
                return (
                  <TabBtn
                    key={tab + index}
                    data={tab}
                    index={index}
                    selectTab={selectProjectType}
                    type="projectTab"
                  />
                );
              })}
            </div>
            <div className="section4Cont sectionCont">
              {projectsWrap.map((cont, index) => {
                return (
                  <Project
                    key={`${projectType}${cont.name}${index}`}
                    cont={cont}
                    type={projectType}
                    selectProject={selectProject}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AfterDomCreated(state, setState) {
  useEffect(() => {
    setState({ ...state, isReady: true });
  }, []);

  useEffect(() => {
    let intervalBox = [],
      count = 0;
    function startInterval(fun, sec) {
      fun();
      const interval = setInterval(fun, sec * 1000);
      intervalBox.push(interval);
      return fun();
    }
    startInterval(() => {
      count++;
      count = count % 10;
      const els = [...document.getElementsByClassName("myCodingImg")];
      els.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = `scale(1)`;
        if (count === index) {
          el.style.opacity = 1;
          el.style.transform = `scale(1.01)`;
        }
      });
    }, 6);

    return () => {
      intervalBox.forEach(interval => clearInterval(interval));
    };
  }, []);
}

function ReturnToBeforeHeight(popupBg, pageYOffset, resetPageYOffset) {
  useEffect(() => {
    if (!popupBg) {
      window.scrollTo(0, pageYOffset);
      resetPageYOffset();
    }
  }, [popupBg]);
}

function CreateUseCallbackMethods(isReady) {
  const movingTab = useCallback(
    index => {
      let top = 0;
      if (index !== 0 && isReady) {
        const els = document.getElementsByClassName("section");
        top = els[index - 1].offsetTop - 10;
      }
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    },
    [isReady]
  );
  return { movingTab };
}

function createPorjectsWrap(data, type) {
  return data.filter(pro => pro[type]).reverse();
}

export default App;
