import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import PoolCard from "../../common/arbitagePoolCard";
import Footer from "../../common/footer";

const Invest = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>

      {/* <!-- head --> */}
      <div class="section section--head">
        <div class="container">
          <div class="row">
            {/* <!-- title --> */}
            <div class="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
              <Heading
                title="Arbitrage pools"
                heading="Join arbitrage pools and unlock the potential of partnership to maximize returns from cryptocurrency arbitrage."
              />
            </div>
            {/* <!-- end title --> */}
          </div>
        </div>
      </div>
      {/* <!-- end head --> */}

      {/* <!-- about --> */}
      <div class="section section--pb">
        <div class="container">
          <div class="row row--relative">
            <div class="col-12">
              <div class="about">
                <h2 class="about__title">What is Arbitrage Pools?</h2>

                <p class="about__text">
                  Welcome to our Arbitrage Pools – an innovative and
                  collaborative approach to cryptocurrency trading that empowers
                  investors to harness the potential of arbitrage trading as a
                  collective force. Arbitrage Pools bring together like-minded
                  individuals seeking to amplify their profits while minimizing
                  individual risk.
                </p>

                <p class="about__text">
                  Arbitrage Pools are carefully curated groups of investors who
                  pool their resources to collectively engage in cryptocurrency
                  arbitrage trading. This strategy leverages the price
                  discrepancies between various exchanges, allowing investors to
                  capitalize on market inefficiencies.
                </p>

                {/* <!-- design elements --> */}
                <span class="block-icon block-icon--purple">
                  <i class="ti ti-topology-star-2"></i>
                </span>
                <span class="screw screw--lines-bl"></span>
                <span class="screw screw--lines-br"></span>
                <span class="screw screw--lines-tr"></span>
              </div>
            </div>

            {/* <!-- animation background --> */}
            <div
              class="section__canvas section__canvas--page section__canvas--first gradient-background"
              id="canvas"
            ></div>
          </div>
        </div>
      </div>
      {/* <!-- end about --> */}

      <div className="container">
        <PoolCard />
      </div>
      <Footer />
    </>
  );
};
export default Invest;
