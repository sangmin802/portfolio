import { useCallback } from "react";
import { slideProps, slide } from "utility/slide";

export default () => {
  const mouseDown = useCallback(e => {
    slideProps.x = e.clientX;
    slideProps.width = e.target.clientWidth;
  }, []);

  const mouseMove = useCallback(e => {
    if (slideProps.x && !slideProps.isSlide) {
      const movedDistance = e.clientX;
      const slideGap = slideProps.width / 2;
      const moveGap = slideProps.x - movedDistance;

      if (moveGap > slideGap) {
        slide("RIGHT", e.currentTarget);
      } else if (moveGap < -slideGap) {
        slide("LEFT", e.currentTarget);
      }
    }
  }, []);

  const mouseOff = useCallback(() => {
    slideProps.x = null;
  }, []);

  const slideLeft = useCallback(e => {
    const parent = e.target.parentElement.parentElement;
    slide("LEFT", parent);
  }, []);

  const slideRight = useCallback(e => {
    const parent = e.target.parentElement.parentElement;
    slide("RIGHT", parent);
  }, []);

  return { mouseDown, mouseMove, mouseOff, slideLeft, slideRight };
};
