import React from "react";
import logo from "../../asset/img/logo.svg";
import { NavLink } from "react-router-dom/dist";
const Footer = () => {
  return (
    <>
      {/* <!-- footer --> */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-1 order-lg-4 order-xl-1">
              {/* <!-- footer logo --> */}
              <div className="footer__logo">
                <img src={logo} alt="Loading" />
              </div>
              {/* <!-- end footer logo --> */}

              {/* <!-- footer tagline --> */}
              <p className="footer__tagline">
                The Centure team works hard <br />
                to deliver exceptional financial results <br />
                and increase our clients' revenue.
              </p>
              {/* <!-- end footer tagline --> */}

              {/* <!-- footer currencies --> */}
              <div className="footer__currencies">
                <i className="ti ti-currency-bitcoin"></i>
                <i className="ti ti-currency-ethereum"></i>
                <i className="ti ti-currency-litecoin"></i>
                <i className="ti ti-currency-solana"></i>
                <i className="ti ti-currency-dogecoin"></i>
              </div>
              {/* <!-- end footer currencies --> */}
            </div>

            {/* <!-- navigation --> */}
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-3 order-md-2 order-lg-2 order-xl-3 offset-md-2 offset-lg-0">
              <h6 className="footer__title">Company</h6>
              <div className="footer__nav">
                <NavLink to="/company">
                  <a href="about.html">About Centure</a>
                </NavLink>

                <NavLink to="/news">
                  <a href="blog.html">Our news</a>
                </NavLink>

                <NavLink to="/company">
                  <a href="about.html">License</a>
                </NavLink>

                <NavLink to="/contact">
                  <a href="contacts.html">Contacts</a>
                </NavLink>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-6 col-xl-4 order-2 order-md-3 order-lg-1 order-xl-2">
              <div className="row">
                <div className="col-12">
                  <h6 className="footer__title">Services & Features</h6>
                </div>

                <div className="col-6">
                  <div className="footer__nav">
                    <NavLink to="/invest">
                      <a href="invest.html">Invest</a>
                    </NavLink>
                    <NavLink to="/token">
                      <a href="token.html">Token</a>
                    </NavLink>
                    <NavLink to="/affiliate">
                      <a href="affiliate.html">Affiliate</a>
                    </NavLink>
                    <NavLink to="/contest">
                      <a href="contest.html">Contest</a>
                    </NavLink>
                  </div>
                </div>

                <div className="col-6">
                  <div className="footer__nav">
                    <NavLink to="/company">
                      <a href="about.html">Safety</a>
                    </NavLink>
                    <NavLink to="/company">
                      <a href="about.html">Automatization</a>
                    </NavLink>

                    <NavLink to="/company">
                      <a href="about.html">Analytics</a>
                    </NavLink>

                    <NavLink to="/reports">
                      <a href="reports.html">Reports</a>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-4 order-md-4 order-lg-3 order-xl-4">
              <h6 className="footer__title">Support</h6>
              <div className="footer__nav">
                <NavLink to="/faq">
                  <a href="faq.html">Help center</a>
                </NavLink>
                <NavLink to="/how">
                  <a href="how.html">How it works</a>
                </NavLink>
                <NavLink to="/privacy">
                  <a href="privacy.html">Privacy policy</a>
                </NavLink>
                <NavLink to="/privacy">
                  <a href="privacy.html">Terms & conditions</a>
                </NavLink>
              </div>
            </div>
            {/* <!-- end navigation --> */}
          </div>

          <div className="row">
            <div className="col-12">
              <div className="footer__content">
                {/* <!-- footer social --> */}
                <div className="footer__social">
                  <a href="#" target="_blank">
                    <i className="ti ti-brand-facebook"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ti ti-brand-x"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ti ti-brand-telegram"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ti ti-brand-discord"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ti ti-brand-linkedin"></i>
                  </a>
                </div>
                {/* <!-- end footer social --> */}

                {/* <!-- footer copyright --> */}
                <small className="footer__copyright">
                  © Centure, 2023. Created by{" "}
                  <a
                    href="https://themeforest.net/user/dmitryvolkov/portfolio"
                    target="_blank"
                  >
                    Dmitry Volkov
                  </a>
                  .
                </small>
                {/* <!-- end footer copyright --> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- design elements --> */}
        <span className="screw screw--footer screw--footer-bl"></span>
        <span className="screw screw--footer screw--footer-br"></span>
        <span className="screw screw--footer screw--footer-tr"></span>
        <span className="screw screw--footer screw--footer-tl"></span>
      </footer>
      {/* <!-- end footer --> */}
    </>
  );
};
export default Footer;
