import React from "react";

import { NavLink } from "react-router-dom";
const Heading = ({title, heading, heading2}) =>{
    return(
        <>
              <div className="section__title">
                <h2>{title}</h2>
                <p>
                {heading} 
                <NavLink to="/contact">
                <a  href="contacts.html">{heading2}</a>
                </NavLink>
                </p>
              </div>
        </>
    );
};
export default Heading;