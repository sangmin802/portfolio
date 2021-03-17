import { useEffect } from "react";
import { scrollProps } from "utility/scroll";

export default () => {
  useEffect(() => {
    const body = document.querySelector("body");
    scrollProps.top = window.pageYOffset;

    const style = `
      position : fixed;
      top : -${scrollProps.top}px;
      left : 0px;
      right : 0px;
    `;
    body.setAttribute("style", style);

    return () => {
      body.setAttribute("style", "");
      window.scrollTo(0, scrollProps.top);
    };
  }, []);
};
