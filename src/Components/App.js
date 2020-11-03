import React, {useState, useEffect} from 'react';
import {PORT_DATA,STACKS,MY_CODING} from '../JSON.js';
import './css/App.css';

import ProjectPop from './ProjectPop.js';

const initalState = {
  projectTab : 0,
  popupBg : false,
  popupData : null,
  popupType : null,
}

export default function App(){
  useEffect(() => {
    let 
      intervalBox = [],
      count = 0;
    function startInterval(fun, sec){
      fun();
      const interval = setInterval(fun, sec*1000)
      intervalBox.push(interval)
      return fun();
    }
    startInterval(() => {
      count++;
      count = count % 10;
      const els = [...document.getElementsByClassName('myCodingImg')];
      els.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = `scale(1)`;
        if(count === index){
          el.style.opacity = 1;
          el.style.transform = `scale(1.01)`;
        }
      })
    }, 6);

    return () => {
      intervalBox.forEach(interval => clearInterval(interval));
    }
  }, [])
  const 
    [state, setState] = useState(initalState),
    {projectTab, popupBg, popupData, popupType} = state,
    data = [...PORT_DATA];
  
  let 
    appBgStyle = 'none',
    appClassName = null,
    projectPop = null;

  if(popupBg){
    appBgStyle = 'block';
    appClassName = 'App100vh';
  }
  if(popupData) projectPop = <ProjectPop data={popupData} type={popupType} closePop = {() => {
    setState({...state, popupBg : false, popupData : null})
  }}/>;

  return (
    <div className={`App ${appClassName}`}>
      <div className="backgroundMyCoding">
        {MY_CODING.map((img, index) => {
          let opacity = 0;
          if(index === 0) opacity = 1;

          return(
            <img className="myCodingImg" style={{opacity}} src={`/portfolio/img/${img}`} alt={img} key={img}/>
          )
        })}
      </div>
      <div className="appBg" style={{display : appBgStyle}}
        onClick={() => {
          setState({...state, popupBg : false, popupData : null})
        }}
      ></div>
      {projectPop}
      <div className="sectionMoveTabWrap">
        <div className="sectionMoveTabInnerWrap">
          {['홈', '연락처', '기술스택', '개인 사이트', '프로젝트'].map((btn, index) => {
            return(
              <div className="sectionMoveTab rem1 textCenter" key={btn}
                onClick={() => {
                  let top = 0;
                  if(index!==0){
                    const 
                      els = document.getElementsByClassName('section');
                    top = els[index-1].offsetTop-10;
                  }
                  window.scrollTo({
                    top : top,
                    left : 0,
                    behavior : 'smooth'
                  });
                }}
              >
                {btn}
              </div>
            )
          })}
        </div>
      </div>
      <div className="innerApp">
        <div className="intro">
          <div className="myImg"></div>
          <div className="introCont textCenter rem11">
            더 나은 내일을 맞이하고자하는<br />
            프론트엔드 개발자 박상민 입니다.
          </div>
        </div>
        <div className="sectionWrap">
          <div className="section1 section">
            <div className="sectionTitle rem11">
              연락처
            </div>
            <div className="section1Cont sectionCont flex">
              <div className="emailTitle">이메일</div>
              <div className="emailCont">
                <div className="emailNaver">sangmin802@naver.com</div>
                <div className="emailNaver">sangmin802@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="section2 section">
            <div className="sectionTitle rem11">
              기술스택
            </div>
            <div className="section2Cont sectionCont">
              {
                ['FrontEnd', 'BackEnd', 'Android', 'Etc'].map((name, index) => {
                  return(
                    <div className="stackDivideWrap" key={name}>
                      <div className="stackDivide rem1">
                        {name}
                      </div>
                      <div className="stackWrap">
                      {STACKS[index].map((stack, index2) => {
                        return(
                          <div className="stack" key={stack+index2}>
                            <div className="stackImg"
                              style={{
                                background : `url('/portfolio/img/stackImg/${stack.src}')`
                              }}
                            >
                            </div>
                            <div className="stackName rem09">
                              {stack.name}
                            </div>
                          </div>
                        )
                      })}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="section3 section">
            <div className="sectionTitle rem11">
              개인 사이트
            </div>
            <div className="section3Cont sectionCont">
              <div className="linkBtn rem1" onClick={() => {
                window.open('https://github.com/sangmin802');
              }}>깃허브</div>
              <div className="linkBtn rem1" onClick={() => {
                window.open('https://sangmin802.github.io/');
              }}>기술 블로그</div>            
            </div>
          </div>
          <div className="section4 section">
            <div className="sectionTitle rem11">
              프로젝트
            </div>
            <div className="projectTabWrap">
              {['PC', 'MOBILE'].map((tab, index) => {
                return(
                  <div className="projectTab rem1" key={tab}
                    onClick={() => {
                      setState({...state, projectTab : index})
                    }}
                  >
                    {tab}
                  </div>
                )
              })}
            </div>
            <div className="section4Cont sectionCont">
              {
                projectTab === 0 ? createPcProject(data, state, setState) : createMobileProject(data, state, setState)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function createPcProject(data, state, setState){
  return data
  .filter(pro => pro.pc)
  .reverse()
  .map(pcCont => {
    const {name, lib, pcImg} = pcCont;
    return(
      <div className="pcProject" key={`pc${name}`}
        onClick={() => {
          setState({...state, popupBg : true, popupData : pcCont, popupType : 'PC'})
        }}
      >
        <div className="projectBg">
          <div className="pointer">
            <img className="imgWidth" src="/portfolio/img/pointer.png" alt="pointer"/>
          </div>
          <div className="projectCont">
            <div className="projectContName rem1 textCenter">{name}</div>
            <div className="projectContLib rem09 textCenter">{lib}</div>
          </div>
        </div>
        <div className="pcProjectImg">
          <img className="imgWidth" src={`/portfolio/img/projectImg/${pcImg[1]}`} alt={name} />
        </div>
      </div>
    )
  })
}

function createMobileProject(data, state, setState){
  return data
  .filter(pro => pro.mobile)
  .reverse()
  .map((mobileCont, index) => {
    const {name, lib, mobileImg} = mobileCont;
    return(
      <div className="mobileProject" key={`mobile${name}${index}`}
        onClick={() => {
          setState({...state, popupBg : true, popupData : mobileCont, popupType : 'MOBILE'})
        }}
      >
        <div className="projectBg">
          <div className="pointer pointerM">
            <img className="imgWidth" src="/portfolio/img/pointer.png" alt="pointer"/>
          </div>
          <div className="projectCont">
            <div className="projectContName rem1 textCenter">{name}</div>
            <div className="projectContLib rem09 textCenter">{lib}</div>
          </div>
        </div>
        <div className="mobileProjectImg">
          <img className="imgWidth" src={`/portfolio/img/projectImg/${mobileImg[1]}`} alt={name} />
        </div>
      </div>
    )
  })
}