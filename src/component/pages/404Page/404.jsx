import React from "react";

import Button from "../../common/button";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      {/* <!-- page wrap --> */}
      <div className="section section--content">
        <div className="section__content">
          {/* <!-- error --> */}
          <div className="page-error">
            <h1 className="page-error__title">404</h1>
            <p className="page-error__text">
              The page you are looking for not available!
            </p>
            <NavLink to="/" className="page-error__btn">
            <Button href="index.html"  title="go back" />
            </NavLink>
            {/* <!-- design elements --> */}
            <span className="block-icon block-icon--purple">
              <i className="ti ti-error-404"></i>
            </span>
            <span className="screw screw--big-tr"></span>
            <span className="screw screw--big-bl"></span>
            <span className="screw screw--big-br"></span>
          </div>
          {/* <!-- end error --> */}
        </div>

        {/* <!-- animation background --> */}
        <div
          className="section__canvas section__canvas--full section__canvas--third gradient-background"
          id="canvas3"
        ></div>
      </div>
      {/* <!-- end page wrap --> */}
    </>
  );
};
export default ErrorPage;
