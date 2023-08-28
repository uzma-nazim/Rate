import React from "react";
import aboutlight01 from "@/assets/images/about-light-01.png";
const ProductFeature = () => {
  return (
    <div className="product-feature container">
      <img className="product1" src={aboutlight01.src} alt="" />
      <div className="featuer-content">
        <div className="new-btn-box">
          <button className="btn3"> New</button>
          <p className="p2 text-gray"> START TRACKING VISITORS</p>
        </div>
        <h1 className="h1">Know More About Our Product.</h1>
        <p className="p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
          lacus non fermentum ultrices. Fusce consectetur le.
        </p>

        <div>
          <div className="feature-list">
            <div className="circle-box">
              <p className="p3">01</p>
            </div>
            <div>
              <p className="p3"> Lorem ipsum dolor.</p>
              <p className="p2">Ut ultricies lacus non fermentum ultrices.</p>
            </div>
          </div>
          <div className="feature-list">
            <div className="circle-box">
              <p className="p3">01</p>
            </div>
            <div>
              <p className="p3"> Lorem ipsum dolor.</p>
              <p className="p2">Ut ultricies lacus non fermentum ultrices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
