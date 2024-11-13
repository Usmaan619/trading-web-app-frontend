import React from "react";

// Common
import Header from "../../common/header/index";
import Button from "../../common/button/index";
import Card from "../../common/statistics/card";
import Footer from "../../common/footer/index";
import Heading from "../../common/heading/heading";
import PoolCard from "../../common/arbitagePoolCard";
import CentureCard from "../../common/centureCard";

// Images
import hero from "../../asset/img/dodgers/dots--line-red.svg";
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
import graph3 from "../../asset/img/graph/graph3.svg";
import graph4 from "../../asset/img/graph/graph4.svg";
import { NavLink } from "react-router-dom";

const Home1 = () => {

  const PartnerCard = [
    {img: logo1,},
    { img: logo2 },
    { img: logo3 },
    { img: logo4 },
    { img: logo5 },
    { img: logo6 },
    { img: logo7 },
    { img: logo8 },
  ];

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
  const AffiliateData = [
    {
      title: "Volume bonus",
      text: " The larger the arbitrage pool volume, the more bonus will be awarded upon reaching these goals!",
      th1: "Bonus",
      th2: "Turnover",
      td1: "$100",
      td2: "$1 000 000",
      td3: "$250",
      td4: "$3 000 000",
      td5: "$400",
      td6: "$5 000 000",
      td7: "$650",
      td8: "$7 000 000",
      td9: "to $50 000",
      td10: "$10 000 000",
      color: "blue",
      icon: "block-icon--blue",
      icon1: "ti ti-mood-dollar",
    },
    {
      title: "Leadership bonus",
      text: " It is accrued on the first day of each month and depends on the turnover of arbitrage pools of the first level.",
      th1: "Bonus",
      th2: "Pool",
      td1: "$500",
      td2: "$4 000",
      td3: "$1 250",
      td4: "$8 000",
      td5: "$2 500",
      td6: "$12 000",
      td7: "$7 000",
      td8: "$24 000",
      td9: "$29 000",
      td10: "$99 000",
      color: "yellow",
      icon: "block-icon--yellow",
      icon1: "ti ti-trophy",
    },
  ];
  return (
    <>
      <Header />
      {/* <!-- hero --> */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 col-xl-6">
              {/* <!-- hero first --> */}
              <div className="hero__content hero__content--first">
                <h1 className="hero__title">
                  <strong>Neural technology</strong> <br />
                  for arbitrage in the <br />
                  crypto industry
                </h1>
                <div className="hero__btns">
                <NavLink to="/signIn" className='hero__btn'>
                    <Button
                      href="signin.html"
                      title="Register"
                    />
                  </NavLink>
                  <NavLink to="/company" className='hero__btn hero__btn--light'>
                  <Button
                    href="about.html"
                    title="About us"
                  />
                  </NavLink>
                </div>
              </div>
              {/* <!-- end hero first --> */}
            </div>
            <div class="col-12 col-md-6 col-lg-5 col-xl-4 offset-xl-2">
              {/* <!-- hero second --> */}
              <div class="hero__content hero__content--second">
                {/* <!-- node --> */}
                <div class="node node--hero">
                  <h3 class="node__title node__title--red">
                    <b>30</b> Centure
                  </h3>
                  <span class="node__date">30 days</span>
                  <span class="node__price">
                    Promotional: <b>Free</b>
                  </span>
                  <span class="node__line">
                    <img src={hero} alt="Loading" />
                  </span>
                  <ul class="node__list">
                    <li>
                      <i class="ti ti-circle-check"></i>
                      <b>1.1%</b> of the deposit amount
                    </li>
                    <li>
                      <i class="ti ti-circle-check"></i>
                      <b>+ 0.3%</b> daily profit
                    </li>
                  </ul>
                  {/* <!-- progressbar --> */}
                  <div class="progressbar progressbar--cta">
                    <h3 class="progressbar__title">Contestants:</h3>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Animated striped"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        class="progress-bar progress-bar-striped progress-bar-animated w-75"
                        // style="width: 75%"
                      >
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
                  <span class="stats__dodger stats__dodger--left stats__dodger--red"></span>
                  <span class="stats__dodger stats__dodger--right stats__dodger--red"></span>
                  <span class="screw screw--br"></span>
                  <span class="screw screw--bl"></span>
                </div>
                {/* <!-- end node --> */}
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

      {/* <!-- arbitrage pools --> */}
      <div className="section">
        <div className="container">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <Heading
                title="Arbitrage pools"
                heading="Join arbitrage pools and unlock the potential of partnership to maximize returns from cryptocurrency arbitrage."
              />
            </div>
            {/* <!-- end title --> */}
          </div>

          <PoolCard />
        </div>
      </div>
      {/* <!-- End arbitrage pools --> */}

      {/* <!-- token --> */}
      <div className="section">
        <div className="container">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
              <Heading
                title="Centure Token"
                heading="More features with own Centure token."
              />
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
      {/* <!-- End token --> */}

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

      {/* <!-- affiliate --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
              <div className="section__title">
                <h2>Promotion bonus</h2>
                <p>
                  The affiliate program will allow you to increase your income
                  by receiving a percentage of the arbitrage pool opened by your
                  referrals. Invite your friends to join the company.
                </p>
              </div>
            </div>
            {/* <!-- end title --> */}
          </div>

          <div className="row row--relative">
            {AffiliateData.map((link, index) => (
              <div className="col-12 col-lg-6">
                {/* <!-- invest --> */}
                <div className="invest invest--big">
                  <h2 className="invest__title">{link.title}</h2>

                  <p className="invest__text">{link.text}</p>

                  <table className="invest__table">
                    <thead>
                      <tr>
                        <th>{link.th1}</th>
                        <th>{link.th2}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{link.td1}</td>
                        <td>{link.td2}</td>
                      </tr>
                      <tr>
                        <td>{link.td3}</td>
                        <td>{link.td4}</td>
                      </tr>
                      <tr>
                        <td>{link.td5}</td>
                        <td>{link.td6}</td>
                      </tr>
                      <tr>
                        <td>{link.td7}</td>
                        <td>{link.td8}</td>
                      </tr>
                      <tr>
                        <td className={link.color}>{link.td9}</td>
                        <td>{link.td10}</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* <!-- design elements --> */}
                  <span className={`block-icon ${link.icon}`}>
                    <i className={link.icon1}></i>
                  </span>
                  <span className="screw screw--lines-bl"></span>
                  <span className="screw screw--lines-br"></span>
                  <span className="screw screw--lines-tr"></span>
                </div>
                {/* <!-- end invest --> */}
              </div>
            ))}
            ;
          </div>

          <div className="row">
            <div className="col-12">
              {/* <!-- section btns --> */}
              <div className="section__btns">
                <NavLink to='/signIn' >
                <Button title="Become" name="section__btn" />

                </NavLink>
              </div>
              {/* <!-- end section btns --> */}
            </div>
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

      <Footer />
    </>
  );
};

export default Home1;
