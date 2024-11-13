import React from "react";

const Button = ({link, name, title}) => {
  return (
    <>
      <div href={link} className={name}>
        {title}
      </div>
    </>
  );
};

export default Button;
