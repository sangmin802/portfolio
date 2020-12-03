import React from 'react';

import '../css/ProjectPop.css';

function ProjectPop(props){
  let
    {data, type} = props,
    {codeUrl, create, used, lib, mobileImg, pcImg, name, siteUrl, desc} = data,
    lowerType = type.toLowerCase(),
    imgWrap, siteUrlComp, codeUrlComp = null,

  // 슬라이드
    x = null,
    slideCount = 0,
    isSlide = false,
    width = null;

  
  function slide(SLIDE_TYPE, target){
    const 
      imgs = [...target.children].filter(child => child.className.includes('slideImg')),
      time = 500;

    isSlide = true;
    switch(SLIDE_TYPE){
      case 'RIGHT' : 
        setTimeout(() => {
          isSlide = false;
          slideCount++;
          slideCount = slideCount%3;
        }, time)
        imgs.forEach((img, index) => {
          const preLeft = Number(img.style.left.replace('%', ''));
          if(index === slideCount){
            img.style.left = '100%';
          }else{
            img.animate([
              {left : `${preLeft}%`},
              {left : `${preLeft-100}%`}
            ],{
              duration : time,
              easing : 'ease-in-out',
            });
            img.style.left = `${preLeft-100}%`;
          }
          return;
        })
      break;
      case 'LEFT' :
        slideCount--;
        if(slideCount < 0) slideCount = 2;
        setTimeout(() => {
          isSlide = false;
        }, time)
        imgs.forEach((img, index) => {
          const preLeft = Number(img.style.left.replace('%', ''));
          if(index === slideCount){
            img.style.left = '-100%';
          }else{
            img.animate([
              {left : `${preLeft}%`},
              {left : `${preLeft+100}%`}
            ],{
              duration : time,
              easing : 'ease-in-out',
            });
            img.style.left = `${preLeft+100}%`;
          }
          return;
        })
      break;
      default : return null;
    }
  }

  switch(type){
    case 'MOBILE' : imgWrap = mobileImg
    break;
    case 'PC' : imgWrap = pcImg
    break;
    default : return null;
  }

  if(siteUrl){
    siteUrlComp = <div className="siteUrl" onClick={() => {window.open(siteUrl)}}>View Site</div>
  }
  if(codeUrl){
    codeUrlComp = <div className="codeUrl" onClick={() => {window.open(codeUrl)}}>View Code</div>
  }

  return(
    <div className="projectPop">
      <div className="projectLinkWrap">
        <div className="projectLink">{siteUrlComp}</div>
        <div className="projectLink">{codeUrlComp}</div>
      </div>
      <div className={`projectImg${lowerType}`}>
        <div className={`${lowerType}ImgWrap imgWrap`}
          onMouseDown={(e) => {
            x = e.clientX;
            width = e.target.clientWidth;
          }}
          onMouseMove={(e) => {
            if(x && !isSlide){
              const 
                movedDistance = e.clientX,
                slideGap = width/2,
                moveGap = x-movedDistance;
              if(moveGap > slideGap){
                slide('RIGHT', e.currentTarget)
              }else if(moveGap < -slideGap){
                slide('LEFT', e.currentTarget)
              }
            }
          }}
          onMouseUp={(e) => {
            x = null;
          }}
          onMouseOut={(e) => {
            x = null;
          }}
        >
          <div className="slideBtn prev">
            <img className="imgWidth" src="/portfolio/img/prev.png" alt="prev"
              onClick={(e) => {
                const parent = e.target.parentElement.parentElement;
                slide('LEFT', parent)
              }}
            />
          </div>
          <div className="slideBtn next">
            <img className="imgWidth" src="/portfolio/img/next.png" alt="next"
              onClick={(e) => {
                const parent = e.target.parentElement.parentElement;
                slide('RIGHT', parent)
              }}
            />
          </div>
          {imgWrap.map((res, index) => {
            return (
              <img className={`${lowerType}Img img${index} imgWidth slideImg`} key={res} src={`/portfolio/img/projectImg/${res}`} style={{left : (index-1)*100+'%'}} alt={res}/>
            )
          })}
        </div>
      </div>
      <div className="projectName flex projectSection">
        <div className="projectPopTitle">이름</div>
        <div className="projectPopCont">{name}</div>
      </div>
      <div className="projectLib flex projectSection">
        <div className="projectPopTitle">메인</div>
        <div className="projectPopCont">{lib}</div>
      </div>
      <div className="projectCreated flex projectSection">
        <div className="projectPopTitle">제작</div>
        <div className="projectPopCont">{create}</div>
      </div>
      <div className="projectUsed flexCol projectSection2">
        <div className="projectPopTitle textCenter">기술</div>
        <div className="projectPopCont flex">
          {used.map(res => (<div className="used rem09" key={res}>{res}</div>))}
        </div>
      </div>
      <div className="projectDesc flexCol projectSection2">
        <div className="projectPopTitle textCenter">상세설명</div>
        <div className="projectPopCont">
          {desc.map(res => (<div className="dsec rem09" key={res}>{res}</div>))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProjectPop,() => (true));