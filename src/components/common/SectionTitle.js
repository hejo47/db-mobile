import React from "react";

const SectionTitle = (props) => {
  return (
    <div className='section-title-wrap'>
      <h3 className='section-title'>{props.title}</h3>
      <span className='section-title-desc'>{props.desc}</span>
    </div>
  );
};

export default SectionTitle;
