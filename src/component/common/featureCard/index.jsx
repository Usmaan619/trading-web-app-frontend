import React from "react";


const FeatureCard = (link) => {
  const {title, text, icon, color} = link;
    return (
    <>
      {/* <!-- feature --> */}
      <div className="feature">
        <h3 className="feature__title">{title}</h3>
        <p className="feature__text">
        {text}
        </p>

        {/* <!-- design elements --> */}
        <span className={`block-icon ${color} `}>
          <i className={icon}></i>
        </span>
        <span className="screw screw--bl"></span>
        <span className="screw screw--tr"></span>
        <span className="screw screw--big-br"></span>
      </div>


      {/* <!-- end feature --> */}
    </>
  );
};
export default FeatureCard;
