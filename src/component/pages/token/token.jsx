import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import FeatureCard from "../../common/featureCard/index";
import CentureCard from "../../common/centureCard";
import Footer from "../../common/footer";

// Images
import graph1 from "../../asset/img/graph/graph1.svg";
import graph2 from "../../asset/img/graph/graph2.svg";
import graph3 from "../../asset/img/graph/graph3.svg";
import graph4 from "../../asset/img/graph/graph4.svg";

const Token = () => {
  const InvestData = [
    {
      name: "Week",
      title1: "+0.19% ",
      title2: "[0.84]",
      img: graph1,
      color: "green",
      style: "offset-lg-1",
    },
    {
      name: "Month",
      title1: "-2.84%",
      title2: "[0.02]",
      img: graph3,
      color: "red",
    },
    {
      name: "All the time",
      title1: "+65.10% ",
      title2: "[49.68]",
      img: graph4,
      color: "green",
      style: "offset-lg-1",
    },
  ];

  const FeatureCardData = [
    {
      title: "Daily Profit",
      text: "All profit accruals are made daily in Centure tokens",
      icon: "ti ti-currency-dollar",
      color: "block-icon--green",
    },
    {
      title: "Bonuses",
      text: "Profit daily from the growth of your arbitrage pool volume",
      icon: "ti ti-gift",
      color: "block-icon--blue",
    },
    {
      title: "Rewards",
      text: "Distribution of tokens as a reward for the growth of arbitrage pool turnover",
      icon: "ti ti-trophy",
      color: "block-icon--yellow",
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
            <div class="col-12">
              <Heading
                title="Token Centure"
                heading="More features with own Centure token."
              />
              {/* <div class="section__title">
						<h1>Token Centure</h1>
						<p>More features with own Centure token.</p>
					</div> */}
            </div>
            {/* <!-- end title --> */}
          </div>

          <div className="row row--relative">
            <div className="col-12">
              {/* <!-- invest --> */}
              <div className="invest invest--big">
                <h2 className="invest__title">Centure Token</h2>

                <div className="row">
                  <div className="col-12 col-lg-5">
                    <div className="invest__rate-wrap">
                      <div className="invest__rate">
                        <span>Current course</span>
                        <p>1 Ctr = $0.791</p>
                      </div>

                      <div className="invest__graph">
                        <img src={graph2} alt="" />
                      </div>
                    </div>
                  </div>
                  {InvestData.map((link, index) => (
                    <div className={`col-12 col-lg-5 ${link.style}`}>
                      <div className="invest__rate-wrap">
                        <div className="invest__rate">
                          <span>{link.name}</span>
                          {/* <!-- or .red --> */}
                          <p className={link.color}>
                            {link.title1} <small>{link.title2}</small>
                          </p>
                        </div>

                        <div className="invest__graph">
                          <img src={link.img} alt="Loading" />
                        </div>
                      </div>
                    </div>
                  ))}
                  ;
                  <p className="invest__info">
                    Centure is a proprietary token of the Centure TRADE project.
                    It is a full-fledged trading unit. Centure was developed as
                    a universal means of payment, allowing people to profit at
                    the actual rate of their currency in the arbitrage pool.
                    Centure token does not depend on the cryptocurrency market
                    and is completely in its own ecosystem.
                  </p>
                  {/* <!-- design elements --> */}
                  <span className="block-icon block-icon--purple">
                    <i className="ti ti-brand-coinbase"></i>
                  </span>
                  <span className="screw screw--lines-bl"></span>
                  <span className="screw screw--lines-br"></span>
                  <span className="screw screw--lines-tr"></span>
                </div>
                {/* <!-- end invest --> */}
              </div>

              {/* <!-- animation background --> */}
              <div
                className="section__canvas section__canvas--page section__canvas--first gradient-background"
                id="canvas"
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end head --> */}

      {/* <!-- features --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            {FeatureCardData.map((link, index) => (
              <div className="col-12 col-lg-4">
                <FeatureCard {...link} />
              </div>
            ))}
            ;
          </div>
        </div>
      </section>
      {/* <!--End features --> */}

      {/* <!-- nodes --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <Heading
                title="Arbitrage Nodes"
                heading="Secure a unique opportunity to engage in cryptocurrency arbitrage by acquiring arbitrage nodes on our platform."
              />
            </div>
            {/* <!-- end title --> */}
          </div>
          <CentureCard />
        </div>
      </section>
      {/* <!-- End nodes --> */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default Token;
