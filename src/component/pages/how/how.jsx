import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import Footer from "../../common/footer";
import Button from "../../common/button/index";
import Question from "../../common/question/question";
const How = () => {
  const HowData = [
    {
      title: "Register on the platform",
      text: "Create an account in the system by filling in your login, E-mail and password in the form. In just a few clicks you will be able to access your personal account.",
      color: "block-icon--orange",
      icon: "ti ti-number-1",
    },
    {
      title: "Choose an investment plan",
      text: "Check out the lineup of our investment offerings, and determine the deposit plan that works best for you.",
      color: "block-icon--green",
      icon: "ti ti-number-2",
    },
    {
      title: "Make a deposit",
      text: "Authorize, replenish your balance by any convenient way. In the My Investments section, open a deposit for any amount in accordance with the requirements of the investment plan you have chosen.",
      color: "block-icon--blue",
      icon: "ti ti-number-3",
    },
    {
      title: "Invite new partners",
      text: "All investors you have attracted become your referrals. From each deposit they make, you will receive a reward on your balance.",
      color: "block-icon--yellow",
      icon: "ti ti-number-4",
    },
    {
      title: "Watch your income grow",
      text: "You will receive investment income from deposits, as well as affiliate rewards. All earned funds will be credited to your balance in the system.",
      color: "block-icon--purple",
      icon: "ti ti-number-5",
    },
    {
      title: "Withdraw accumulated profits",
      text: "Order payments of earned money, enjoy the growth of your wealth, do not deny yourself in pleasures, make gifts to your family and friends!",
      color: "block-icon--red",
      icon: "ti ti-number-6",
    },
  ];

  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* <!-- head --> */}
      <div class="section section--head">
        <div class="container">
          <div class="row">
            {/* <!-- title --> */}
            <div class="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
              <Heading
                title="How it works?"
                heading="We have prepared a detailed instruction on working with Centure. After studying it, you will understand how to invest and make a profit."
              />
            </div>
            {/* <!-- end title --> */}
          </div>
        </div>
      </div>
      {/* <!-- end head --> */}

      {/* <!-- steps --> */}
      <div class="section">
        <div class="container">
          <div class="row">
            {HowData.map((link, index) => (
              <div class="col-12">
                {/* <!-- step --> */}
                <div class="step">
                  <h3 class="step__title">{link.title}</h3>
                  <p class="step__text">{link.text}</p>

                  {/* <!-- design elements --> */}
                  <span class={`block-icon ${link.color}`}>
                    <i class={link.icon}></i>
                  </span>
                  <span class="screw screw--lines-bl"></span>
                  <span class="screw screw--lines-br"></span>
                  <span class="screw screw--lines-tr"></span>
                </div>
                {/* <!-- end step --> */}
              </div>
            ))}
            ;
            <div class="col-12">
              {/* <!-- section btns --> */}
              <div class="section__btns">
                <Button title="Register" href="signin.html" name="section__btn" />
              </div>
              {/* <!-- end section btns --> */}
            </div>
          </div>
        </div>
      </div>

     {/* Question Start */}
     <Question />
      {/* Question End */}


      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default How;
