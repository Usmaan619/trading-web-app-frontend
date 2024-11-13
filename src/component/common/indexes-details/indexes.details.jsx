import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "../../common/indexes-details/indexes.details.css";

export const IndexesDetails = ({ symbol }) => {
  const singleIndexDetail = () => {
    try {
      

      
    } catch (error) {
      console.log('error: ', error);
      
    }
  };

  /** mock data */
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
  return (
    <div className="container">
      <div className="content">
        {/* Left Side - Basic Data */}
        <div className="left-side">
          <h2>NIFTY 50 Index</h2>
          <p>
            <strong>Current Price:</strong> {niftyData.regularMarketPrice} INR
          </p>
          <p
            className={`price-change ${
              niftyData.regularMarketChange < 0 ? "negative" : "positive"
            }`}
          >
            <strong>Change:</strong> {niftyData.regularMarketChange} (
            {(niftyData.regularMarketChangePercent * 100).toFixed(2)}%)
          </p>
          <p>
            <strong>52-Week Low:</strong> {niftyData.fiftyTwoWeekRange.low}
          </p>
          <p>
            <strong>52-Week High:</strong> {niftyData.fiftyTwoWeekRange.high}
          </p>
        </div>

        {/* Center - Chart */}
        <div className="center">
          <Nifty50Chart data={niftyData} />
        </div>

        {/* Right Side - Additional Details */}
        <div className="right-side">
          <p>
            <strong>50-Day Average:</strong> {niftyData.fiftyDayAverage}
          </p>
          <p>
            <strong>200-Day Average:</strong> {niftyData.twoHundredDayAverage}
          </p>
          <p>
            <strong>Average Volume (3M):</strong>{" "}
            {niftyData.averageDailyVolume3Month}
          </p>
        </div>
      </div>
    </div>
  );
};

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Nifty50Chart = ({ data }) => {
  // Extracting necessary data for the chart
  const fiftyTwoWeekLow = data.fiftyTwoWeekRange.low;
  const fiftyTwoWeekHigh = data.fiftyTwoWeekRange.high;
  const fiftyDayAverage = data.fiftyDayAverage;
  const twoHundredDayAverage = data.twoHundredDayAverage;

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
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "Price (INR)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time Period",
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
