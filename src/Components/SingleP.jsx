import React from "react";
import { urlFor } from "../client";

const SingleP = ({ item, setPrImg, setPrompt, setPrCaption }) => {
  const handlePrompt = () => {
    setPrImg(urlFor(item.img));
    setPrompt(true);
    setPrCaption(item.caption);
  };
  return (
    <div className="single-P">
      <div className="img-gal">
        <img onClick={handlePrompt} src={urlFor(item.img)} alt="" />
      </div>
    </div>
  );
};

export default SingleP;
