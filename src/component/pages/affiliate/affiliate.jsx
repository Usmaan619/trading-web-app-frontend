import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import Footer from "../../common/footer";
import Button from "../../common/button";
import Question from "../../common/question/question";
import { NavLink } from "react-router-dom";
const Affiliate = () => {
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
                title="Promotion bonus"
                heading="The affiliate program will allow you to increase your income by receiving a percentage of the arbitrage pool opened by your referrals. Invite your friends to join the company."
              />
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
                <NavLink to="/signIn">
                  <Button title="Become" name="section__btn" />
                </NavLink>
              </div>
              {/* <!-- end section btns --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end head --> */}
      {/* Question Start */}
      <Question />
      {/* Question End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default Affiliate;
