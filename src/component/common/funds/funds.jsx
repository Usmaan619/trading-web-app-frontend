import React, { useEffect, useState } from "react";
import logo1 from "../../asset/img/partners/logo1.svg";
import logo2 from "../../asset/img/partners/logo2.svg";
import logo3 from "../../asset/img/partners/logo3.svg";
import logo4 from "../../asset/img/partners/logo4.svg";
import logo5 from "../../asset/img/partners/logo5.svg";
import logo6 from "../../asset/img/partners/logo6.svg";
import logo7 from "../../asset/img/partners/logo7.svg";
import logo8 from "../../asset/img/partners/logo8.svg";

import graphChart from "../../asset/graph-chart-2-svgrepo-com.svg";

// import topRated from "../../asset/img/top-rated.svg";

import Heading from "../heading/heading";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { GET_AMFI_FUND_API } from "../../apis/api";
import PaginatedList from "./infiniteScroll";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Funds() {
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
  const justLunch = [
    { name: "Calculate SIP", subName: "returns", img: "" },
    { name: "New Fund", subName: "Offer (NFO)", img: "" },
  ];
  const topRatedFilter = [
    { name: "High returns", img: "" },
    { name: "Top rate", img: "" },
    { name: "Index funds", img: "" },
    { name: "Large cap", img: "" },
    { name: "Mid cap", img: "" },
    { name: "Small cap", img: "" },
  ];

  const niftyData = {
    fiftyTwoWeekRange: {
      low: 19579.65,
      high: 26277.35,
    },
    fiftyDayAverage: 24963.186,
    twoHundredDayAverage: 23524.457,
    regularMarketPrice: 23716,
    regularMarketChange: -167.44922,
    regularMarketChangePercent: -0.70109665,
    averageDailyVolume3Month: 285598,
    symbol: "^NSEI",
  };

  // Extracting necessary data for the chart
  const fiftyTwoWeekLow = 0;

  const fiftyTwoWeekHigh = 2; //middle
  const fiftyDayAverage = 3;
  const twoHundredDayAverage = 0;

  // Dummy data for demonstration (replace with actual historical data if available)
  const labels = ["", "", "", ""];
  const values = [
    fiftyTwoWeekLow,
    twoHundredDayAverage,
    fiftyDayAverage,
    // fiftyTwoWeekHigh,
  ];

  // Chart data and options
  const chartData = {
    labels,
    datasets: [
      {
        label: "NIFTY 50 Index Price",
        data: values,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(255,255,255,1)",
        tension: 0.1,
      },
    ],
  };

  // Chart options with white label colors
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white", // Legend label color
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // X-axis labels color
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // X-axis grid color
        },
      },
      y: {
        ticks: {
          color: "white", // Y-axis labels color
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Y-axis grid color
        },
      },
    },
  };

  const [AMFIFundData, setAMFIFundData] = useState();
  console.log("AMFIFundData: ", AMFIFundData);

  useEffect(() => {
    getAMFIFundData();
  }, []);

  const getAMFIFundData = async () => {
    try {
      const fundsData = await GET_AMFI_FUND_API();
      console.log("fundsData: ", fundsData);
      setAMFIFundData(fundsData?.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <React.Fragment>
      <section className="mt-4 section mx-5">
        <div className="row">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2">
              <Heading title={`Collection to get you started`} />
            </div>
            {/* <!-- end title --> */}
          </div>
          <div className="col-8">
            <div className="row">
              {topRatedFilter.map((t, index) => (
                <div className="col-6 col-lg-3" key={index}>
                  {/* <!-- partner --> */}
                  <div className="funds-container h-auto p-3">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={graphChart}
                        height={35}
                        width={35}
                        alt="Loading"
                      />
                      <div className="d-grid  text-white fixed-width">
                        <div className="font-sm text-truncate">{t?.name}</div>
                        {/* <div className="font-xsm text-truncate">return</div> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- end partner --> */}
                </div>
              ))}
              ;
            </div>
          </div>
          <div className="col-4 h-75">
            <div className="chart-container">
              <Line data={chartData} options={options} />
            </div>
          </div>
        </div>

        <section className="">
              <div className=" ">
                <div className="row">
                  {/* <!-- title --> */}
                  <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2">
                    <Heading title={`Just Lunched`} />
                  </div>
                  {/* <!-- end title --> */}
                </div>

                <div className="row">
                  {justLunch.map((j, index) => (
                    <div className="col-6 col-lg-3" key={index}>
                      {/* <!-- partner --> */}
                      <div className="funds-container h-auto p-3">
                        <div className="d-flex  gap-2">
                          <img
                            src={graphChart}
                            height={35}
                            width={35}
                            alt="Loading"
                          />
                          <div className="d-grid  text-white fixed-width">
                            <div className="font-sm text-truncate">
                              {j?.name}
                            </div>
                            <div className="font-xsm text-truncate">
                              {j?.subName}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- end partner --> */}
                    </div>
                  ))}
                  ;
                </div>
              </div>
            </section>
        <section className="section">
          <div className=" mt-4">
            <div className="row">
              {/* <!-- title --> */}
              <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2">
                <Heading
                  title={`Top performing funds`}
                  heading="We take pride in collaborating with our partners who help us
                  provide the best services to our clients. If you'd like to become our partne, please "
                  heading2="contact us"
                />
              </div>
              {/* <!-- end title --> */}
            </div>
          

            <div className="row">
              <PaginatedList data={AMFIFundData} />
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
}
