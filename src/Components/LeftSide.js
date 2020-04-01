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
          <div className="pcImgWrap imgWrap">
            {pcImg.map((res, index) => {
              return (
                <img className={`img pcImg pcImg${index}`} key={res} src={`/img/${res}`} alt={res}
                  onMouseDown={this.slideMouseDown.bind(this)}
                  onMouseMove={this.slideMouseMove.bind(this)}
                  onMouseUp={this.slideMouseOut.bind(this)}
                  onMouseOut={this.slideMouseOut.bind(this)}
                />
              )
            })}
          </div>
        </div>
        <div className="mobile">
          <div className="mobileImgWrap imgWrap">
            {mobileImg.map((res, index) => {
              return (
                <img className={`img mobileImg mobileImg${index}`} key={res} src={`/img/${res}`} alt={res}
                  onMouseDown={this.slideMouseDown.bind(this)}
                  onMouseMove={this.slideMouseMove.bind(this)}
                  onMouseUp={this.slideMouseOut.bind(this)}
                  onMouseOut={this.slideMouseOut.bind(this)}
                />
              )
            })}
          </div>
        </div>
      </div>;
    }else if(pc && !mobile){
      imgWrap = 
      <div className="portImg">
        <div className="pc">
          <div className="pcImgWrap imgWrap">
            {pcImg.map((res, index) => {
              return (
                <img className={`img pcImg pcImg${index}`} key={res} src={`/img/${res}`} alt={res}
                  onMouseDown={this.slideMouseDown.bind(this)}
                  onMouseMove={this.slideMouseMove.bind(this)}
                  onMouseUp={this.slideMouseOut.bind(this)}
                  onMouseOut={this.slideMouseOut.bind(this)}
                />
              )
            })}
          </div>
        </div>
      </div>;
    }else if(!pc && mobile){
      imgWrap = 
      <div className="portImg">
        <div className="onlyMobile">
          <div className="fullMobileImgWrap imgWrap">
            {mobileImg.map((res, index) => {
              return (
                <img className={`img fullMobileImg mobileImg${index}`} key={res} src={`/img/${res}`} alt={res}
                  onMouseDown={this.slideMouseDown.bind(this)}
                  onMouseMove={this.slideMouseMove.bind(this)}
                  onMouseUp={this.slideMouseOut.bind(this)}
                  onMouseOut={this.slideMouseOut.bind(this)}
                />
              )
            })}
          </div>
        </div>
      </div>;
    }

    let siteUrl, codeUrl = null;
    if(data.siteUrl !== undefined){
      siteUrl = <span className="siteUrl" onClick={() => {window.open(data.siteUrl)}}>View Site</span>
    }
    if(data.codeUrl !== undefined){
      codeUrl = <span className="codeUrl" onClick={() => {window.open(data.codeUrl)}}>View Code</span>
    }

    return(
      <div className="portfolio">
        <div className="contBox">
          {imgWrap}
          <div className="desc">
            <div className="title">{data.name}</div>
            <div className="created">{data.create}</div>
            <div className="descArray">
              {data.desc.map((res, index) => {
                return <span key={index}>#{res}</span>
              })}
            </div>
            <div className="link">
              {siteUrl}{codeUrl}
            </div>
          </div>
        </div>
      </div>
    );
  };

  componentDidMount(){
    const pcWidth = document.querySelector('.pcImgWrap').clientWidth;
    const pcImgWrap = document.querySelectorAll('.pcImgWrap');
    const mobileWidth = document.querySelector('.mobileImgWrap').clientWidth;
    const mobileImgWrap = document.querySelectorAll('.mobileImgWrap');
    const fullMobileWidth = document.querySelector('.fullMobileImgWrap').clientWidth;
    const fullMobileImgWrap = document.querySelectorAll('.fullMobileImgWrap');
    this.setLeft(pcWidth, pcImgWrap);
    this.setLeft(mobileWidth, mobileImgWrap);
    this.setLeft(fullMobileWidth, fullMobileImgWrap);
  }

  setLeft(_width, _wrap){
    for(let i of _wrap){
      const Img = i.childNodes;
      Array.from(Img).map((res, index) => {
        res.style.left = _width*(index-1)+'px';
        return null;
      })
    }
  }

  count = 0;
  slide = false;
  mouseDown = false;
  x = null;
  slideImgaes = null;

  slideMouseOut(e){
    if(this.slideImgaes !== null && e.type === 'mouseup'){
      this.translateClear()
    }
    this.mouseDown = false;
    // this.x = null;
    // this.slideImgaes = null;
  }

  slideMouseDown(e){
    this.x = e.clientX;
    this.slideImgaes = e.target.parentNode.childNodes;
    this.mouseDown = true;
  }

  slideMouseMove(e){
    if(this.mouseDown){
      if(!this.slide){
        let baseGap = null;
        let width = null;
        const target = e.target.classList.value;
        const check = e.target.classList.value.includes('pcImg');
        baseGap = check ? 200 : 50;
        if(target.includes('pcImg')){
          width = document.querySelector('.pcImgWrap').clientWidth;
        }else{
          if(target.includes('fullMobileImg')){
            width = document.querySelector('.fullMobileImgWrap').clientWidth;
          }else{
            width = document.querySelector('.mobileImgWrap').clientWidth;
          }
        }
        let gap = this.x - e.clientX;
        if(gap > baseGap){
          this.slide = true;
          this.slideRight(gap, width)
        }else if(gap < -baseGap){
          this.slide = true;
          this.count--;
          if(this.count === -1){
            this.count = 2
          }
          this.slideLeft(gap, width)
        }else{
          this.translate(gap, width);
        };
      };
    ;}
  };

  translate(_gap){
    Array.from(this.slideImgaes).map(res => {
      res.style.transform = `translate(${-_gap}px)`;
      return null;
    })
  }

  translateClear(){
    Array.from(this.slideImgaes).map(res => {
      res.classList.add('transition');
      res.style.transform = `translate(0px)`;
      return null;
    })
    setTimeout(() => {
      Array.from(this.slideImgaes).map(res => {
        res.classList.remove('transition');
        return null;
      });
    }, 300);
  }

  slideRight(_gap, _width){
    Array.from(this.slideImgaes).map((res, index) => {
      res.classList.remove('transition');
      res.style.transform = `translate(0px)`;
      const preLeft = Number(res.style.left.replace('px', ''));
      if(this.count === index){
        res.style.left = `${_width}px`;
      }else{
        res.animate([
          {left : `${preLeft-_gap}px`},
          {left : `${preLeft-_width}px`}
        ],{
          duration: 500,
          easing : 'ease-in-out',
        });
        res.style.left = `${preLeft-_width}px`;
      }
      return null;
    })
    setTimeout(() => {
      this.slide = false;
      this.count++;
      this.count = this.count%3;
    }, 500)
  };

  slideLeft(_gap, _width){
    Array.from(this.slideImgaes).map((res, index) => {
      res.classList.remove('transition');
      res.style.transform = `translate(0px)`;
      const preLeft = Number(res.style.left.replace('px', ''));
      if(this.count === index){
        res.style.left = `${-_width}px`;
      }else{
        res.animate([
          {left : `${preLeft-_gap}px`},
          {left : `${preLeft+_width}px`}
        ],{
          duration: 500,
          easing : 'ease-in-out',
        });
        res.style.left = `${preLeft+_width}px`;
      }
      return null;
    })
    setTimeout(() => {
      this.slide = false;
    }, 500)
  };
};