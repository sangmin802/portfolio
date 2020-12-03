import React from 'react';

function Stack({stack}){

  return (
    <div className="stack">
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
}

export default React.memo(Stack,() => (true));