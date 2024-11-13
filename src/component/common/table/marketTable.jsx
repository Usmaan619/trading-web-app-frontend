import React, { useEffect, useState } from "react";
import { GET_INDEXES_API } from "../../apis/api";

const MarketTable = () => {
  const [tableData, SetTableData] = useState();
  useEffect(() => {
    const intervalCall = setInterval(() => {
      getIndexes();
    }, 10000);
    return () => {
      // clean up interval
      clearInterval(intervalCall);
    };
  }, []);

  const getIndexes = async () => {
    try {
      const res = await GET_INDEXES_API();
      SetTableData(res?.data);
    } catch (error) {
      console.log("error:GET_INDEXES_API ", error);
    }
  };
  return (
    <div className="col-12">
      <div className="deals">
        <div className="deals__table-wrap overflow-auto">
          <table className="deals__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Regular Market Price</th>
                <th>Regular Market Day Range</th>
                <th>Market Open Price</th>
                <th>Symbol</th>
                <th>Fifty-Two Week Range</th>
                <th>Regular Market Change Percent</th>
                <th>Quote Type</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="deals__text alert-success">{item?.shortName}</div>
                  </td>
                  <td>
                    <div className="deals__text">
                      ₹{item?.regularMarketPrice}
                    </div>
                  </td>
                  <td>
                    <div className="deals__text">
                      low: ₹{item?.regularMarketDayRange?.low}
                    </div>
                    <div className="deals__text">
                      high: ₹{item?.regularMarketDayRange?.high}
                    </div>
                  </td>
                  <td>
                    <div className="deals__text deals__text--buy">
                      ₹{item?.regularMarketOpen}
                    </div>
                  </td>
                  <td>
                    <div className="deals__text deals__text--sell">
                      {item?.symbol}
                    </div>
                  </td>
                  <td>
                    <div className="deals__text">
                      low: ₹{item?.fiftyTwoWeekRange?.low}
                    </div>
                    <div className="deals__text">
                      high: ₹{item?.fiftyTwoWeekRange?.high}
                    </div>
                  </td>
                  <td>
                    <div className="deals__text">
                      {item?.regularMarketChangePercent}%
                    </div>
                  </td>
                  <td>
                    <div className="deals__text">{item?.quoteType}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Decorative Elements */}
        <span className="screw screw--lines-bl"></span>
        <span className="screw screw--lines-br"></span>
        <span className="screw screw--lines-tr"></span>
        <span className="screw screw--lines-tl"></span>
      </div>
    </div>
  );
};

export default MarketTable;
