import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import Question from "../../common/question/question";
import Footer from "../../common/footer";
import FaqCard from "../../common/faq/faq";
const Faq = () => {
  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {/* <!-- Start Faq --> */}
      <div className="section--head">
        <FaqCard />
      </div>
      {/* <!-- end  --Faq> */}

      {/* Question Start */}
      <Question />
      {/* Question End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default Faq;
