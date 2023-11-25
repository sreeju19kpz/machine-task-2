import React, { useState } from "react";
import FeaturedItem from "./FeaturedItem";

import LeftButton from "./navButtons/LeftButton";
import RightButton from "./navButtons/RightButton";
import { photos } from "./List/Skills";
const FeaturedComponent = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const slideForward = () => {
    setImgIndex((index) => {
      if (index === photos.length - 1) return 0;
      return index + 1;
    });
  };
  const slideBackward = () => {
    setImgIndex((index) => {
      if (index === 0) return photos.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="default   wid-100-p bg-col-whi">
      <div
        className="default wid-100-p ali-ite-cnt  gap-20-px "
        style={{ overflow: "hidden" }}
      >
        <div className="default  wid-100-p flex-dir-row justify-con-spc-aro flex-shr-1 wid-100-vw hei-100-vh">
          <div className="default pos-set-abs pad-10-px  left0 height-100-p ali-ite-cnt justify-con-cnt z-ind-1 bac-col-on-hov tra-tra-200ms-eas">
            <LeftButton Click={slideBackward} />
          </div>
          <div className="default mak-ele-uns over-flw-hid  flex-dir-row wid-100-p">
            {photos.map((item) => {
              return (
                <div
                  className="default wid-100-p over-flw-hid tra-tra-400ms-eas "
                  style={{
                    translate: `${-100 * imgIndex}%`,
                  }}
                >
                  <FeaturedItem img={item} />
                </div>
              );
            })}
          </div>
          <div className="default pad-10-px pos-set-abs right0 height-100-p ali-ite-cnt justify-con-cnt z-ind-1 bac-col-on-hov tra-tra-200ms-eas">
            <RightButton Click={slideForward} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponent;
