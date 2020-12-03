import React, {useState, useCallback} from 'react';
import {PORT_DATA,STACKS,MY_CODING} from '../../JSON.js';

import App from '../Presentational/App.js';
import ProjectPop from '../Presentational/ProjectPop.js';
import Project from '../Presentational/Project.js';
import Stack from '../Presentational/Stack.js';
import StackWrap from '../Presentational/StackWrap.js';
import TabBtn from '../Presentational/TabBtn.js';

const initalState = {
  projectTab : 0,
  popupBg : false,
  popupData : null,
  popupType : null,
  pageYOffset : null,
}

export default function AppContainer(){
  const [state, setState] = useState(initalState);
  const {popupData, popupType} = state;
  const {resetPageYOffset, closePop, selectProjectType, selectProject} = SetDispatcher(state, setState);
  const projectPop = createProjectPop(popupData, popupType, closePop);

  return <App 
            // 디스패쳐
            closePop={closePop}
            selectProject={selectProject}
            resetPageYOffset={resetPageYOffset}
            selectProjectType={selectProjectType}

            // 프리젠테이셔널컴포넌트
            projectPop={projectPop}
            Project ={Project}
            Stack ={Stack}
            StackWrap ={StackWrap}
            TabBtn ={TabBtn}

            MY_CODING={[...MY_CODING]}
            STACKS={[...STACKS]}
            data={[...PORT_DATA]}

            props={state}
          />
}

function SetDispatcher(state, setState){
  const resetPageYOffset = () => {setState({...state, pageYOffset : null})};
  const closePop = () => {setState({...state, popupBg : false, popupData : null})};
  const selectProjectType = useCallback((index) => {
    setState({...state, projectTab : index})
  })
  const selectProject = useCallback((cont, type) => {
    setState({...state, popupBg : true, popupData : cont, popupType : type.toUpperCase(), pageYOffset : window.pageYOffset})
  }, [state.projectTab]);

  return {resetPageYOffset, closePop, selectProjectType, selectProject};
}

function createProjectPop(popupData, popupType, closePop){
  return popupData ? <ProjectPop data={popupData} type={popupType} closePop = {closePop}/> : null;
}