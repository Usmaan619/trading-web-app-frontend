import React, { useEffect, useState } from "react";

// Common
import Header from "../../common/header/index";
import Card from "../../common/statistics/card";
import FeatureCard from "../../common/featureCard/index";
import Heading from "../../common/heading/heading";
import Button from "../../common/button/index";
import CompanyCard from "../../common/companyCard";
import RoadMap from "../../common/roadmap/roadmap";
import Footer from "../../common/footer/index";

// Images

import logo1 from "../../asset/img/partners/logo1.svg";
import logo2 from "../../asset/img/partners/logo2.svg";
import logo3 from "../../asset/img/partners/logo3.svg";
import logo4 from "../../asset/img/partners/logo4.svg";
import logo5 from "../../asset/img/partners/logo5.svg";
import logo6 from "../../asset/img/partners/logo6.svg";
import logo7 from "../../asset/img/partners/logo7.svg";
import logo8 from "../../asset/img/partners/logo8.svg";
import graph1 from "../../asset/img/graph/graph1.svg";
import graph2 from "../../asset/img/graph/graph2.svg";
import { NavLink } from "react-router-dom";
import Faq from "../../common/faq/faq";
import { GET_INDEXES_API } from "../../apis/api";
import MarketTable from "../../common/table/marketTable";

const Home = () => {
  

  const FeatureCardData = [
    {
      title: "Safety",
      text: "We do not have access to your personal data and cannot withdraw funds",
      icon: "ti ti-shield-dollar",
      color: "block-icon--orange",
    },
    {
      title: "Automatization",
      text: "Automatic arbitrage calculations and deal closing",
      icon: "ti ti-24-hours",
      color: "block-icon--green",
    },
    {
      title: "Analytics",
      text: "The robot shows you how your trades are performing in real time",
      icon: "ti ti-chart-histogram",
      color: "block-icon--blue",
    },
  ];

  // const TableData = [
  //   {
  //     name: "BNB/USDT",
  //     name1: "Binance",
  //     image: Image1,
  //     img: Image2,
  //     name2: "Bitget",
  //     date: " 15.11.23 01:09",
  //     buyingPrice: "304.3",
  //     sellingPrice: "305",
  //     amount: "$4 259",
  //     profit: "+$9.80",
  //     percentage: "0.23%",
  //   },
  //   {
  //     name: "SOL/USDT",
  //     name1: "Bitfinex",
  //     image: Image3,
  //     img: Image4,
  //     name2: "Kraken",
  //     date: " 15.11.23 01:01",
  //     buyingPrice: "333.32",
  //     sellingPrice: "333.7",
  //     amount: "$8 204",
  //     profit: "+$9.35",
  //     percentage: "0.11%",
  //   },
  //   {
  //     name: "ALGO/USDT",
  //     name1: "Bithumb",
  //     image: Image5,
  //     img: Image6,
  //     name2: "Coinbase",
  //     date: "15.11.23 00:57",
  //     buyingPrice: "0.2181",
  //     sellingPrice: "0.21847",
  //     amount: "$8 040",
  //     profit: "+$13.64",
  //     percentage: "0.17%",
  //   },
  //   {
  //     name: "BNB/USDT",
  //     name1: "Coincheck",
  //     image: Image7,
  //     img: Image8,
  //     name2: "Gate",
  //     date: " 15.11.23 00:51",
  //     buyingPrice: "1739.15",
  //     sellingPrice: "1741.32",
  //     amount: "$7 599",
  //     profit: "+$9.48",
  //     percentage: "0.12%",
  //   },
  //   {
  //     name: "MATIC/USDT",
  //     name1: "Kucoin",
  //     image: Image9,
  //     img: Image10,
  //     name2: "OKX",
  //     date: "15.11.23 00:48",
  //     buyingPrice: "2.1",
  //     sellingPrice: "2.3",
  //     amount: "$999",
  //     profit: "+$7.24",
  //     percentage: "0.28%",
  //   },
  //   {
  //     name: "SOL/USDT",
  //     name1: "Upbit",
  //     image: Image11,
  //     img: Image12,
  //     name2: "Binance",
  //     date: "15.11.23 00:42",
  //     buyingPrice: "0.59",
  //     sellingPrice: "0.69",
  //     amount: "$3 524",
  //     profit: "+$12.05",
  //     percentage: "0.18%",
  //   },
  //   {
  //     name: "BNB/USDT",
  //     name1: "OKX",
  //     image: Image13,
  //     img: Image14,
  //     name2: "Bitget",
  //     date: "15.11.23 00:35",
  //     buyingPrice: "23.66",
  //     sellingPrice: "23.89",
  //     amount: "$2 092",
  //     profit: "+$15.77",
  //     percentage: "0.29%",
  //   },
  // ];
  const PartnerCard = [
    { img: logo1 },
    { img: logo2 },
    { img: logo3 },
    { img: logo4 },
    { img: logo5 },
    { img: logo6 },
    { img: logo7 },
    { img: logo8 },
  ];

  return (
    <>
      <Header />
      {/* <!-- hero --> */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7">
              {/* <!-- hero first --> */}
              <div className="hero__content hero__content--first">
                <h1 className="hero__title">
                  <strong>Neural technology</strong> <br />
                  for arbitrage trading in the crypto industry
                </h1>
                <div className="hero__btns">
                  <NavLink to="/signIn" className="hero__btn">
                    <Button
                      href="signin.html"
                      // name="hero__btn"
                      title="Register"
                    />
                  </NavLink>
                  <NavLink to="/company" className="hero__btn hero__btn--light">
                    <Button
                      href="about.html"
                      // name="hero__btn hero__btn--light"
                      title="About us"
                    />
                  </NavLink>
                </div>
              </div>
              {/* <!-- end hero first --> */}
            </div>
            <div class="col-12 col-lg-5">
              {/* <!-- hero second --> */}
              <div class="hero__content hero__content--second">
                {/* <!-- CTA --> */}
                <a href="/signIn" class="cta">
                  <h2 class="cta__title">Registration bonus</h2>
                  <p class="cta__text">
                    Sign up and take part in the monthly drawing of{" "}
                    <b>$500 deposit bonus!</b> The number of contestants is
                    limited.
                  </p>
                  {/* <!-- progressbar --> */}
                  <div class="progressbar">
                    <h3 class="progressbar__title">Contestants:</h3>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Animated striped"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar progress-bar-striped progress-bar-animated w-75">
                        <span>75</span>
                      </div>
                    </div>
                    <div class="progressbar__values">
                      <span class="progressbar__value progressbar__value--left">
                        0
                      </span>
                      <span class="progressbar__value progressbar__value--right">
                        100
                      </span>
                    </div>
                  </div>
                  {/* <!-- end progressbar --> */}

                  {/* <!-- design elements --> */}
                  <span class="block-icon block-icon--red">
                    <i class="ti ti-gift"></i>
                  </span>
                  <span class="screw screw--lines-bl"></span>
                  <span class="screw screw--lines-br"></span>
                  <span class="screw screw--lines-tr"></span>
                </a>
                {/* <!-- end CTA --> */}
              </div>
              {/* <!-- end hero second --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}

      {/* <!-- statistics --> */}
      <Card />
      {/* <!--End statistics --> */}

      {/* <!-- features --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <Heading
                title="Our features"
                heading="Whether you're a beginner or an experienced trader, our platform empowers you to make informed decisions and your trading success."
              />
            </div>
            {/* <!-- end title --> */}
          </div>

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
      {/* <!-- recent deals --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <Heading
                title="Arbitration deals"
                heading="Browse a curated list of real-time arbitrage deals, complete with detailed information about the involved cryptocurrencies and exchanges."
              />
            </div>
            {/* <!-- end title --> */}

            {/* <!-- deals table --> */}
            <div className="col-12">
              <MarketTable />
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

      {/* <!-- investing --> */}
      <section className="section">
        <div className="container">
          <div className="row row--relative">
            <div className="col-12 col-lg-6">
              {/* <!-- invest --> */}
              <div className="invest">
                <h2 className="invest__title">For Investors</h2>

                <ul className="invest__list">
                  <li>
                    - <b>6 types</b> of arbitrage pools with monthly <b>10%</b>{" "}
                    yield and the possibility to reinvest on more favorable
                    terms;
                  </li>
                  <li>
                    - <b>Arbitrage nodes</b> to boost your pool;
                  </li>
                  <li>- Other rewards and bonuses;</li>
                </ul>

                <NavLink to="/invest" className="invest__link">
                  Arbitrage pools
                </NavLink>

                {/* <!-- design elements --> */}
                <span className="block-icon block-icon--orange">
                  <i className="ti ti-database-dollar"></i>
                </span>
                <span className="screw screw--lines-bl"></span>
                <span className="screw screw--lines-br"></span>
                <span className="screw screw--lines-tr"></span>
              </div>
              {/* <!-- end invest --> */}
            </div>

            <div className="col-12 col-lg-6">
              {/* <!-- invest --> */}
              <div className="invest">
                <h2 className="invest__title">Centure Token</h2>

                <div className="invest__rate-wrap">
                  <div className="invest__rate">
                    <span>Current course</span>
                    <p>1 Centure = $0.791</p>
                  </div>

                  <div className="invest__graph">
                    <img src={graph2} alt="" />
                  </div>
                </div>

                <div className="invest__rate-wrap">
                  <div className="invest__rate">
                    <span>Week</span>
                    {/* <!-- or .red --> */}
                    <p className="green">
                      +0.19% <small>[0.84]</small>
                    </p>
                  </div>

                  <div className="invest__graph">
                    <img src={graph1} alt="" />
                  </div>
                </div>

                <NavLink to="/token" className="invest__link">
                  More about token
                </NavLink>

                {/* <!-- design elements --> */}
                <span className="block-icon block-icon--blue">
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
              className="section__canvas section__canvas--first gradient-background gradient-background"
              id="canvas"
            ></div>
          </div>
        </div>
      </section>
      {/* <!-- partners --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2">
              <Heading
                title="Our partners"
                heading="We take pride in collaborating with our partners who help us
                  provide the best services to our clients. If you'd like to become our partne, please "
                heading2="contact us"
              />
            </div>
            {/* <!-- end title --> */}
          </div>

          <div className="row">
            {PartnerCard.map((link, index) => (
              <div className="col-6 col-lg-3">
                {/* <!-- partner --> */}
                <a href="#" className="partner">
                  <img src={link.img} alt="Loading" />
                  <p>thesponsor.com</p>

                  {/* <!-- design elements --> */}
                  <span className="screw screw--br"></span>
                  <span className="screw screw--bl"></span>
                  <span className="screw screw--tr"></span>
                  <span className="screw screw--tl"></span>
                </a>
                {/* <!-- end partner --> */}
              </div>
            ))}
            ;
          </div>
        </div>
      </section>
      {/* <!-- end partners --> */}

      {/* start roadmap */}
      <RoadMap />
      {/* end roadmap */}

      {/* start Faq */}
      <Faq />

      {/* end Faq */}

      {/* <!-- company --> */}
      <CompanyCard />
      {/* <!-- end company --> */}

      {/* <!-- Footer Start --> */}
      <Footer />
      {/* <!-- Footer End --> */}
    </>
  );
};

export default Home;
