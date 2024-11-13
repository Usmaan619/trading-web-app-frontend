import "./App.css";
import Home from "./component/pages/home";
import Home1 from "./component/pages/home1";
import Invest from "./component/pages/invest/invest";
import Token from "./component/pages/token/token";
import Affiliate from "./component/pages/affiliate/affiliate";
import Company from "./component/pages/about/about";
import News from "./component/pages/news/news";
import How from "./component/pages/how/how";
import Reports from "./component/pages/reports/reports";
import Article from "./component/pages/artical/artical";
import Contact from "./component/pages/contact/contact";
import Contest from "./component/pages/contest/contest";
import Faq from "./component/pages/faq/faq";
import SignIn from "./component/pages/signin/signin";
import SignUp from "./component/pages/signup/signup";
import ErrorPage from "./component/pages/404Page/404";
import Forgot from "./component/pages/forgot/forgot";
import Privacy from "./component/pages/privacy/privacy";
import Profile from "./component/pages/profile/profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./component/common/scrollToTop/scroll";
import { ToastContainer } from "react-toastify";
import AdminUser from "./component/admin/user";

import { IndexesDetails } from "./component/common/indexes-details/indexes.details";

function App() {
  useEffect(() => {
    let isScrolling = false;
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
          const header = document.getElementById("header");
          const topbar = document.getElementById("topbar");
          if (header && topbar) {
            const isHeaderScrolled = window.scrollY > 100;
            header.classList.toggle("header-scrolled", isHeaderScrolled);
            topbar.classList.toggle("topbar-scrolled", isHeaderScrolled);
          }
          isScrolling = false;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <ToastContainer />
      <IndexesDetails />
    </>
  );
}

export default App;
