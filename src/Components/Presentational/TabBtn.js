import React from 'react';

function TabBtn({data, index, selectTab, type}){
  return(
    <div className={`${type} rem1 textCenter`}
      onClick={() => {selectTab(index)}}
    >
      {data}
    </div>
  )
}

export default React.memo(TabBtn, (prev, next) => {
  if(prev.type==='projectTab') return true;
  if(prev.isReady!==next.isReady) return false;
  return true;
});