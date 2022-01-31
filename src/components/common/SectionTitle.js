import React from "react";
import Spacer from "./Spacer";

const SectionTitle = ({ title, descreption }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <h5>{descreption}</h5>
      <span></span>
      <Spacer size={50} />
    </div>
  );
};

export default SectionTitle;
