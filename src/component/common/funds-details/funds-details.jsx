import React, { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Heading from "../heading/heading";
import graphChart from "../../asset/graph-chart-2-svgrepo-com.svg";
import { AiFillStar } from "react-icons/ai";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import SipAmountInput from "../funds/test";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function FundsDetails() {
  let [searchParams, setSearchParams] = useSearchParams();
  const data = searchParams.get("data");
  console.log("data: ", data);

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

  const topRatedFilter = [
    { name: "High returns", img: "" },
    { name: "Top rate", img: "" },
    { name: "Index funds", img: "" },
    { name: "Large cap", img: "" },
    { name: "Mid cap", img: "" },
    { name: "Small cap", img: "" },
  ];

  const [investment, setInvestment] = useState(5000);
  const [fundOverview, setFundOverview] = useState(5000);
  const [sipAmount, setSipAmount] = useState(0);

  const [customAmount, setCustomAmount] = useState(""); // State to track input value

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10) || ""; // Parse as number or keep empty
    setCustomAmount(value);
    setSipAmount(value); // Update SIP amount when input changes
  };

  const handleButtonClick = (amount) => {
    setSipAmount(amount); // Update SIP amount on button click
    setCustomAmount(""); // Clear custom input if button is clicked
  };

  const location = useLocation();

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const parsedData = queryParams.get("data")
    ? JSON.parse(decodeURIComponent(queryParams.get("data")))
    : null;
  console.log("parsedData: ", parsedData);
  return (
    <section className="mt-4 section mx-5">
      <div className="row">
        <div className="row">
          {/* <!-- title --> */}
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2">
            <Heading title={`Funds Details`} />
          </div>
          {/* <!-- end title --> */}
        </div>
        <div className="col-8 h-75">
          <div className="row row--relative h-75">
            <div className="col-12 h-75">
              <div className="company h-75">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="company__title">Motilal Oswal Midcap Fund</h2>

                  <div className="d-flex align-items-center">
                    <AiFillStar color="#FFD700" size={24} />
                    <span className="ms-2">5</span>
                  </div>
                </div>
                <p className="text-success">+31.06% (3Y returns)</p>
                <Line data={chartData} options={options} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 ">
          {/* <SIPDetails /> */}
          <div className="invest p-3 h-100">
            <h4 className="company__title">SIP Details</h4>

            {/* Button Group */}

            <SipAmountInput />

            {/* Display Selected Amount */}
            {/* <p className="mt-3 text-white">Selected SIP Amount: ₹{sipAmount}</p> */}

            {/* Start SIP Button */}
            <button className="btn btn-success mt-auto text-white w-100">
              Start SIP
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="d-grid gap-3 mt-3">
        <div className="row row--relative ">
          <div className="col-12 ">
            <div className="company ">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="company__title">Returns Calculator</h2>
              </div>

              <input
                type="range"
                className="form-range "
                min="500"
                max="50000"
                step="500"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
              />
              <div className="mt-2 text-white">
                <span>₹{investment} per month</span>
              </div>
              <div className="mt-2 text-white d-flex justify-content-between w-100">
                <span>Total Investment: ₹60,000</span>
                <br />
                <span>Returns: ₹75,141 (25.24%)</span>
              </div>
            </div>
          </div>

          {/* <!-- animation background --> */}
          <div
            className="section__canvas section__canvas--second gradient-background "
            id="canvas2"
          ></div>
        </div>

        {/* <ReturnsCalculator /> */}
        {/* <FundOverview /> */}

        <div className="row row--relative ">
          <div className="col-12 ">
            <div className="company ">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="company__title">Fund Overview</h2>
              </div>

              <ul className="list-unstyled text-white ">
                <li>
                  <strong>NAV:</strong> ₹103.94
                </li>
                <li>
                  <strong>Expense Ratio:</strong> 1.62%
                </li>
                <li>
                  <strong>Minimum SIP Amount:</strong> ₹500
                </li>
              </ul>
              <div className="mt-3 text-white w-100">
                <strong>Asset Allocation:</strong>
                <div className="progress mt-2 w-100">
                  <div
                    className="progress-bar bg-info w-100"
                    role="progressbar"
                    style={{ width: "97.6%" }}
                  >
                    Equity (97.6%)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- animation background --> */}
          <div
            className="section__canvas section__canvas--second gradient-background "
            id="canvas2"
          ></div>
        </div>
      </div>
    </section>
  );
}
