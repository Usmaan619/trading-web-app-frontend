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
import Funds from "./component/common/funds/funds";
import "react-toastify/dist/ReactToastify.css";
import FundsDetails from "./component/common/funds-details/funds-details";

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
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/token" element={<Token />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/company" element={<Company />} />
          <Route path="/news" element={<News />} />
          <Route path="/how" element={<How />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/errorPage" element={<ErrorPage />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/profile" element={<Profile />} />
          {/* new */}
          <Route path="/funds" element={<Funds />} />
          <Route path="/detail/:symbol" element={<IndexesDetails />} />
          <Route path="/fund-details" element={<FundsDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
