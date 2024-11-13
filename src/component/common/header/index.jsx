import React, { useEffect, useState } from "react";
import Logo from "../../asset/img/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  // State variables
  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(window.scrollY === 0);

  // Event handlers
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
    if (window.scrollY === 0) {
      setIsHeaderActive(!isHeaderActive);
    }
  };

  const handleScroll = () => {
    setIsHeaderActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header active">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              {/* <!-- btn --> */}
              {/* <button
                className="header__btn"
                type="button"
                aria-label="header__nav"
              >
                <span></span>
                <span></span>
                <span></span>
              </button> */}
              {isNavActive ? (
                <button
                  className="header__btn header__btn--active"
                  onClick={toggleNav}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              ) : (
                <button className="header__btn" onClick={toggleNav}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              )}
              {/* <!-- end btn --> */}

              {/* <!-- logo --> */}

              <NavLink to="/" className="header__logo">
                <img src={Logo} alt="Loading" />
              </NavLink>
              {/* <!-- end logo --> */}

              {/* <!-- tagline --> */}
              <span className="header__tagline">
                Arbitrage trading <br />
                HTML Template
              </span>
              {/* <!-- end tagline --> */}

              {/* <!-- navigation --> */}
              <ul className={`header__nav ${isNavActive ? "header__nav--active" : ""}`} id="header__nav">
                <li className="header__dropdown">
                  <a
                    className="dropdown-link"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home <i className="ti ti-point-filled"></i>
                  </a>

                  <ul className="dropdown-menu header__dropdown-menu">
                    <li>
                      {/* <a href="index.html">Home style v1</a> */}
                      <NavLink to="/">Home style v1</NavLink>
                    </li>
                    <li>
                      <NavLink to="/home1">Home style v2</NavLink>
                    </li>
                  </ul>
                </li>

                <li className="header__dropdown">
                  <a
                    className="dropdown-link"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Earnings <i className="ti ti-point-filled"></i>
                  </a>

                  <ul className="dropdown-menu header__dropdown-menu">
                    <li>
                      {/* <a href="invest.html">Invest</a> */}
                      <NavLink to="/invest">Invest</NavLink>
                    </li>
                    <li>
                      {/* <a href="token.html">Token</a> */}
                      <NavLink to="/token">Token</NavLink>
                    </li>
                    <li>
                      {/* <a href="affiliate.html">Affiliate</a> */}
                      <NavLink to="/affiliate">Affiliate</NavLink>
                    </li>
                    <li>
                      {/* <a href="contest.html">Contest</a> */}
                      <NavLink to="/contest">Contest</NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  {/* <a href="about.html">Company</a> */}
                  <NavLink to="/Company">Company</NavLink>
                </li>

                <li>
                  {/* <a href="blog.html">News</a> */}
                  <NavLink to="/news">News</NavLink>
                </li>

                <li className="header__dropdown">
                  <a
                    className="dropdown-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages <i className="ti ti-point-filled"></i>
                  </a>

                  <ul className="dropdown-menu header__dropdown-menu">
                    <li>
                      {/* <a href="how.html">How it works</a> */}
                      <NavLink to="/how">How it works</NavLink>
                    </li>
                    <li>
                      {/* <a href="reports.html">Reports</a> */}
                      <NavLink to="/reports">Reports</NavLink>
                    </li>
                    <li>
                      {/* <a href="profile.html">Profile</a> */}
                      <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                      {/* <a href="article.html">Article</a> */}
                      <NavLink to="/article">Article</NavLink>
                    </li>
                    <li>
                      {/* <a href="contacts.html">Get in touch</a> */}
                      <NavLink to="/contact">Get in touch</NavLink>
                    </li>
                    <li>
                      {/* <a href="faq.html">FAQ</a> */}
                      <NavLink to="/faq">FAQ</NavLink>
                    </li>
                  </ul>
                </li>

                <li className="header__dropdown">
                  <a
                    className="dropdown-link dropdown-link--menu"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots"></i>
                  </a>

                  <ul className="dropdown-menu header__dropdown-menu">
                    <li>
                      {/* <a href="signin.html">Sign in</a> */}
                      <NavLink to="/signIn">Sign in</NavLink>
                    </li>
                    <li>
                      {/* <a href="signup.html">Sign up</a> */}
                      <NavLink to="/signUp">Sign up</NavLink>
                    </li>
                    <li>
                      {/* <a href="forgot.html">Forgot password</a> */}
                      <NavLink to="/forgot">Forgot password</NavLink>
                    </li>
                    <li>
                      {/* <a href="404.html">404 Page</a> */}
                      <NavLink to="/errorPage">404 Page</NavLink>
                    </li>
                    <li>
                      {/* <a href="privacy.html">Privacy policy</a> */}
                      <NavLink to="/privacy">Privacy policy</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <!-- end navigation --> */}

              {/* <!-- language --> */}
              <div className="header__language">
                <a
                  className="dropdown-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN <i className="ti ti-point-filled"></i>
                </a>

                <ul className="dropdown-menu header__language-menu">
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                </ul>
              </div>
              {/* <!-- end language --> */}

              {/* <!-- profile --> */}
              <NavLink to="/profile" className="header__profile">
                <i className="ti ti-user-circle"></i>
                <span>Profile</span>
              </NavLink>
              {/* <!-- end profile --> */}
            </div>
          </div>
        </div>
      </div>
    </header>

    //     <>

    //     <nav class="navbar navbar-expand-lg bg-light">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">Navbar scroll</a>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarScroll">
    //       <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Link</a>
    //         </li>
    //         <li class="nav-item dropdown">
    //           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Link
    //           </a>
    //           <ul class="dropdown-menu">
    //             <li><a class="dropdown-item" href="#">Action</a></li>
    //             <li><a class="dropdown-item" href="#">Another action</a></li>
    //             <li><hr class="dropdown-divider"/></li>
    //             <li><a class="dropdown-item" href="#">Something else here</a></li>
    //           </ul>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link disabled">Link</a>
    //         </li>
    //       </ul>
    //       <form class="d-flex" role="search">
    //         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button class="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
    //     </>
  );
};

export default Header;
