import React from "react";

const FeaturedItem = ({ img }) => {
  return (
    <div className="default  ali-ite-cnt width-100-p ">
      <div className="default wid-100-p max-wid-400-px ">
        <img
          className="asp-rat-16-9 img-fit-cov width-100-p"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturedItem;
