import React from 'react';

import './css/sidecss.css';

export default class LeftSide extends React.Component {
  render(){
    const {data, data : {mobile, pc, pcImg, mobileImg}} = this.props;
    let imgWrap = null;
    if(pc && mobile){
      imgWrap = 
      <div className="portImg">
        <div className="pc">
          <div className="imgWrap">
            {pcImg.map((res, index) => {
              return (
                <img className={`img img${index}`} key={res} src={`/img/${res}`} alt={res} />
              )
            })}
          </div>
        </div>
        <div className="mobile">

        </div>
      </div>;
    }else if(pc && !mobile){
      imgWrap = 
      <div className="portImg">
        <div className="pc">
          <div className="imgWrap">
            {pcImg.map((res, index) => {
              return (
                <img className={`img img${index}`} key={res} src={`/img/${res}`} alt={res} onClick={this.check.bind(this)}/>
              )
            })}
          </div>
        </div>
      </div>;
    }else if(!pc && mobile){
      imgWrap = 
      <div className="portImg">
        <div className="onlyMobile">
          <div className="imgWrap">
            
          </div>
        </div>
      </div>;
    }
    return(
      <div className="portfolio">
        <div className="title">{data.name}</div>
        <div className="contBox">
          {imgWrap}
          <div className="desc">
            
          </div>
        </div>
      </div>
    );
  };

  check(){
    console.log('?')
  }
};