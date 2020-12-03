import React from 'react';

function StackWrap({name, index, Stack, STACKS}){

  return (
    <div className="stackDivideWrap">
      <div className="stackDivide rem1">
        {name}
      </div>
      <div className="stackWrap">
      {STACKS[index].map((stack, index2) => {
        return <Stack 
                  key={stack+index2}
                  stack={stack}
                />
      })}
      </div>
    </div>
  )
}

export default React.memo(StackWrap, () => (true));