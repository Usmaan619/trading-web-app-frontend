import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "../../common/indexes-details/indexes.details.css";
import { GET_INDEXES_BY_ID_API } from "../../apis/api";
// import graph1 from "../../asset/img/graph/graph1.svg";
// import graph2 from "../../asset/img/graph/graph2.svg";
// import Heading from "../heading/heading";
import { useParams } from "react-router-dom";

export const IndexesDetails = () => {
  const { symbol } = useParams();
  console.log(" symbol:---------------------------- ", symbol);

  const [indexesData, setIndexesData] = useState();
  // "^NSEI",
  //   "^BSESN",
  //   "^NSEBANK",
  //   "^DJI",
  //   "^IXIC",
  //   "NASDAQ:AAPL",
  //   "BTC-USD",
  //   "ETH-USD",
  //   "SOL-USD",
  //   "BNB-USD",
  //   "GC=F",
  //   "SI=F",
  //   "HG=F",
  //   "CL=F",
  //   "NG=F",

  useEffect(() => {
    if (symbol) singleIndexDetail();
    const intervalCall = setInterval(() => {
      singleIndexDetail();
    }, 10000);

    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  // const intervalCall = setInterval(() => {
  //   getIndexes();
  // }, 10000);
  // return () => {
  //   // clean up interval
  //   clearInterval(intervalCall);
  // };

  const singleIndexDetail = async () => {
    try {
      const res = await GET_INDEXES_BY_ID_API(symbol);
      console.log("res: ", res);
      setIndexesData(res?.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  /** mock data */
  // const niftyData = {
  //   fiftyTwoWeekRange: {
  //     low: 19579.65,
  //     high: 26277.35,
  //   },
  //   fiftyDayAverage: 24963.186,
  //   twoHundredDayAverage: 23524.457,
  //   regularMarketPrice: 23716,
  //   regularMarketChange: -167.44922,
  //   regularMarketChangePercent: -0.70109665,
  //   averageDailyVolume3Month: 285598,
  //   symbol: "^NSEI",
  // };
  return (
    <React.Fragment>
      {/* section */}

      <section className="section mt-5">
        <div className="row">
          {/* <!-- title --> */}
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="section__title">
              <h2>{indexesData?.shortName} Details</h2>
              <p>
                "Secure a unique opportunity to engage in cryptocurrency
                arbitrage by acquiring arbitrage nodes on our platform."
              </p>
            </div>
          </div>
          {/* <!-- end title --> */}
        </div>
        <div className="container">
          <div className="row row--relative">
            <div className="col-12 col-lg-4">
              {/* <!-- invest --> */}
              <div className="invest">
                <h2 className="invest__title">NIFTY 50 Index</h2>

                <ul className="invest__list">
                  <li>
                    <strong>Current Price:</strong>{" "}
                    {indexesData?.regularMarketPrice} INR
                  </li>
                  <li
                    className={`price-change ${
                      indexesData?.regularMarketChange < 0
                        ? "negative"
                        : "positive"
                    }`}
                  >
                    <strong>Change:</strong> {indexesData?.regularMarketChange}{" "}
                    (
                    {(indexesData?.regularMarketChangePercent * 100).toFixed(2)}
                    %)
                  </li>
                  <li>
                    <strong>52-Week Low:</strong>{" "}
                    {indexesData?.fiftyTwoWeekRange.low}
                  </li>
                  <li>
                    <strong>52-Week High:</strong>{" "}
                    {indexesData?.fiftyTwoWeekRange.high}
                  </li>

                  <li>
                    <strong>50-Day Average:</strong>{" "}
                    {indexesData?.fiftyDayAverage}
                  </li>
                  <li>
                    <strong>200-Day Average:</strong>{" "}
                    {indexesData?.twoHundredDayAverage}
                  </li>
                  <li>
                    <strong>Average Volume (3M):</strong>{" "}
                    {indexesData?.averageDailyVolume3Month}
                  </li>
                </ul>

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

            <div className="col-12 col-lg-8">
              {/* <!-- invest --> */}
              <div className="invest">
                <h2 className="invest__title">NIFTY 50 Chart</h2>

                <div className="center">
                  <Nifty50Chart data={indexesData} />
                </div>
                {/* <div className="invest__link">More about token</div> */}

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
    </React.Fragment>
  );
};

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Nifty50Chart = ({ data }) => {
  // Extracting necessary data for the chart
  const fiftyTwoWeekLow = data?.fiftyTwoWeekRange.low;
  const fiftyTwoWeekHigh = data?.fiftyTwoWeekRange.high;
  const fiftyDayAverage = data?.fiftyDayAverage;
  const twoHundredDayAverage = data?.twoHundredDayAverage;

  // Dummy data for demonstration (replace with actual historical data if available)
  const labels = ["52-Week Low", "50-Day Avg", "200-Day Avg", "52-Week High"];
  const values = [
    fiftyTwoWeekLow,
    fiftyDayAverage,
    twoHundredDayAverage,
    fiftyTwoWeekHigh,
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

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
};
