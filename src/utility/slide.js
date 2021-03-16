export const slideProps = {
  x: null,
  slideCount: 0,
  isSlide: false,
  width: null,
};

export const slide = (SLIDE_TYPE, target) => {
  const imgs = [...target.children].filter(child =>
    child.className.includes("slideImg")
  );
  const time = 500;

  slideProps.isSlide = true;
  switch (SLIDE_TYPE) {
    case "RIGHT":
      setTimeout(() => {
        slideProps.isSlide = false;
        slideProps.slideCount++;
        slideProps.slideCount = slideProps.slideCount % 3;
      }, time);
      imgs.forEach((img, index) => {
        const preLeft = Number(img.style.left.replace("%", ""));
        if (index === slideProps.slideCount) {
          img.style.left = "100%";
        } else {
          img.animate(
            [{ left: `${preLeft}%` }, { left: `${preLeft - 100}%` }],
            {
              duration: time,
              easing: "ease-in-out",
            }
          );
          img.style.left = `${preLeft - 100}%`;
        }
        return;
      });
      break;
    case "LEFT":
      slideProps.slideCount--;
      if (slideProps.slideCount < 0) slideProps.slideCount = 2;
      setTimeout(() => {
        slideProps.isSlide = false;
      }, time);
      imgs.forEach((img, index) => {
        const preLeft = Number(img.style.left.replace("%", ""));
        if (index === slideProps.slideCount) {
          img.style.left = "-100%";
        } else {
          img.animate(
            [{ left: `${preLeft}%` }, { left: `${preLeft + 100}%` }],
            {
              duration: time,
              easing: "ease-in-out",
            }
          );
          img.style.left = `${preLeft + 100}%`;
        }
        return;
      });
      break;
    default:
      return null;
  }
};
