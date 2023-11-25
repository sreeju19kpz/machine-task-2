import React, { useEffect, useState } from "react";
import useFetchWindowSize from "./customHooks/FetchWindowSize";
import useFetchYScroll from "./customHooks/FetchYScroll";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const FeaturedImg = ({ item }) => {
  const { windowSize } = useFetchWindowSize();
  const { scrollData } = useFetchYScroll();
  const [scr, setScr] = useState(0);
  console.log(`${scr} ${Math.round(scrollData / windowSize.winHeight)}`);
  useEffect(() => {
    if (Math.round(scrollData / windowSize.winHeight) !== scr) {
      setScr(Math.round(scrollData / windowSize.winHeight));
    } else return;
  }, [scrollData, item]);
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
      {item.map((item) => {
        <ParallaxLayer offset={0} speed={2.5}>
          <div id="">
            <img src={item} alt="" />
          </div>
        </ParallaxLayer>;
      })}
    </Parallax>
  );
};

export default FeaturedImg;
