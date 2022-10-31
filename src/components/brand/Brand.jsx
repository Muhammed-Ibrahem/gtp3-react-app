import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./Brand.css";
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="brand-image">
        <img src={google} alt="Google" />
      </div>
      <div className="brand-image">
        <img src={slack} alt="slack" />
      </div>
      <div className="brand-image">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="brand-image">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="brand-image">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
