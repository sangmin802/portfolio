import React from "react";
import Link from "component/link/index";
import SlideHook from "hook/slideHook";

function ProjectPop({ data, type }) {
  const {
    codeUrl,
    create,
    used,
    lib,
    mobileImg,
    pcImg,
    name,
    siteUrl,
    desc,
  } = data;
  const img = type === "pc" ? pcImg : mobileImg;
  const { mouseDown, mouseMove, mouseOff, slideLeft, slideRight } = SlideHook();

  return (
    <div className="projectPop">
      <div className="projectLinkWrap">
        {siteUrl && <Link name="View Site" url={siteUrl} />}
        {codeUrl && <Link name="View Code" url={codeUrl} />}
      </div>
      <div className={`projectImg${type}`}>
        <div
          className={`${type}ImgWrap imgWrap`}
          onMouseDown={mouseDown}
          onMouseMove={mouseMove}
          onMouseUp={mouseOff}
          onMouseOut={mouseOff}
        >
          <div className="slideBtn prev">
            <img
              className="imgWidth"
              src="/portfolio/img/prev.png"
              alt="prev"
              onClick={slideLeft}
            />
          </div>
          <div className="slideBtn next">
            <img
              className="imgWidth"
              src="/portfolio/img/next.png"
              alt="next"
              onClick={slideRight}
            />
          </div>
          {img.map((res, index) => {
            return (
              <img
                className={`${type}Img img${index} imgWidth slideImg`}
                key={res}
                src={`/portfolio/img/projectImg/${res}`}
                style={{ left: (index - 1) * 100 + "%" }}
                alt={res}
              />
            );
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
          {used.map(res => (
            <div className="used rem09" key={res}>
              {res}
            </div>
          ))}
        </div>
      </div>
      <div className="projectDesc flexCol projectSection2">
        <div className="projectPopTitle textCenter">상세설명</div>
        <div className="projectPopCont">
          {desc.map(res => (
            <div className="dsec rem09" key={res}>
              {res}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProjectPop, () => true);
