import React from "react";
import Header from "../common/header/index";
import Card from "../common/statistics/card";
import Heading from "../common/heading/heading";
import Button from "../common/button/index";
import Footer from "../common/footer/index";

import { NavLink } from "react-router-dom";
import UserTable from "./userTable";

const AdminUser = () => {
  return (
    <>
      <Header />
      {/* <!-- hero --> */}

      {/* <!-- end hero --> */}

      {/* <!-- statistics --> */}
      <div className="mt-5 pt-5 ">
        <Card />
      </div>
      {/* <!--End statistics --> */}

      {/* <!-- recent deals --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <Heading title="Users Details" />
            </div>
            {/* <!-- end title --> */}

            {/* <!-- deals table --> */}
            <div className="col-12">
              <UserTable />
            </div>
            {/* <!-- End deals table --> */}

            <div className="col-12">
              {/* <!-- section btns --> */}
              <div className="section__btns">
                <NavLink to="/reports">
                  <Button
                    href="reports.html"
                    name="section__btn"
                    title="View reports"
                  />
                </NavLink>
              </div>
              {/* <!-- end section btns --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end recent deals --> */}

      {/* <!-- Footer Start --> */}
      <Footer />
      {/* <!-- Footer End --> */}
    </>
  );
};

export default AdminUser;
