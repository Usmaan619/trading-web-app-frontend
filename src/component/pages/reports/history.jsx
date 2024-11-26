import React from "react";
import "../../pages/reports/history.css";

const HistoryPage = () => {
  const positions = [
    {
      id: 1,
      script: "BANKNIFTY Nov",
      action: "Sell 300.00",
      open: "52149.60",
      close: "51987.80",
      profitLoss: "-2346.74",
      profitLossStyle: "loss",
    },
    {
      id: 2,
      script: "GOLD MCX Nov",
      action: "Buy 5.00",
      open: "77228",
      close: "77520",
      profitLoss: "111,000.00",
      profitLossStyle: "profit",
    },
    {
      id: 3,
      script: "NIFTY Nov",
      action: "Buy 500.00",
      open: "23495.20",
      close: "23565.00",
      profitLoss: "28,800.00",
      profitLossStyle: "profit",
    },
    {
      id: 4,
      script: "COPPER MCX Dec",
      action: "Buy 4.00",
      open: "827.30",
      close: "819.80",
      profitLoss: "-75,000.00",
      profitLossStyle: "loss",
    },
  ];

  return (
    <div className="history-container">
      {/* Header Section */}
      <header className="header">
        <h1>History</h1>
      </header>

      {/* News Section */}
      <div className="news-banner">
        <p>
          Private News: Automatic Payment Deposit Gateway link is down for
          sometime... please use manual banks for deposits for the time being
        </p>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <div className="table-header">
          <span>Script</span>
          <span>Action</span>
          <span>Open/SL</span>
          <span>Close/TP</span>
          <span>Profit/Loss</span>
        </div>
        {positions.map((position) => (
          <div key={position.id} className="table-row">
            <span>{position.script}</span>
            <span>{position.action}</span>
            <span>{position.open}</span>
            <span>{position.close}</span>
            <span className={position.profitLossStyle}>
              {position.profitLoss}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
