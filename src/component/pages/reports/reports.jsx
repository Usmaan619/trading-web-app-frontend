import React, { useState } from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import Card from "../../common/statistics/card";
import Question from "../../common/question/question";
import Footer from "../../common/footer";

// Images
import Image1 from "../../asset/img/exchanges/binance.png";
import Image2 from "../../asset/img/exchanges/bitget.png";
import Image3 from "../../asset/img/exchanges/bitfinex.png";
import Image4 from "../../asset/img/exchanges/kraken.png";
import Image5 from "../../asset/img/exchanges/bithumb.png";
import Image6 from "../../asset/img/exchanges/coinbase.png";
import Image7 from "../../asset/img/exchanges/coincheck.png";
import Image8 from "../../asset/img/exchanges/gate.png";
import Image9 from "../../asset/img/exchanges/kucoin.png";
import Image10 from "../../asset/img/exchanges/okx.png";
import Image11 from "../../asset/img/exchanges/upbit.png";
import MarketTable from "../../common/table/marketTable";
const Reports = () => {
  const TableData = [
    {
      name: "BNB/USDT",
      name1: "Binance",
      image: Image1,
      img: Image2,
      name2: "Bitget",
      date: " 15.11.23 01:09",
      buyingPrice: "304.3",
      sellingPrice: "305",
      amount: "$4 259",
      profit: "+$9.80",
      percentage: "0.23%",
    },
    {
      name: "SOL/USDT",
      name1: "Bitfinex",
      image: Image3,
      img: Image4,
      name2: "Kraken",
      date: " 15.11.23 01:01",
      buyingPrice: "333.32",
      sellingPrice: "333.7",
      amount: "$8 204",
      profit: "+$9.35",
      percentage: "0.11%",
    },
    {
      name: "ALGO/USDT",
      name1: "Bithumb",
      image: Image5,
      img: Image6,
      name2: "Coinbase",
      date: "15.11.23 00:57",
      buyingPrice: "0.2181",
      sellingPrice: "0.21847",
      amount: "$8 040",
      profit: "+$13.64",
      percentage: "0.17%",
    },
    {
      name: "BNB/USDT",
      name1: "Coincheck",
      image: Image7,
      img: Image8,
      name2: "Gate",
      date: " 15.11.23 00:51",
      buyingPrice: "1739.15",
      sellingPrice: "1741.32",
      amount: "$7 599",
      profit: "+$9.48",
      percentage: "0.12%",
    },
    {
      name: "MATIC/USDT",
      name1: "Kucoin",
      image: Image9,
      img: Image10,
      name2: "OKX",
      date: "15.11.23 00:48",
      buyingPrice: "2.1",
      sellingPrice: "2.3",
      amount: "$999",
      profit: "+$7.24",
      percentage: "0.28%",
    },
    {
      name: "SOL/USDT",
      name1: "Upbit",
      image: Image11,
      img: Image1,
      name2: "Binance",
      date: "15.11.23 00:42",
      buyingPrice: "0.59",
      sellingPrice: "0.69",
      amount: "$3 524",
      profit: "+$12.05",
      percentage: "0.18%",
    },
    {
      name: "BNB/USDT",
      name1: "OKX",
      image: Image10,
      img: Image2,
      name2: "Bitget",
      date: "15.11.23 00:35",
      buyingPrice: "23.66",
      sellingPrice: "23.89",
      amount: "$2 092",
      profit: "+$15.77",
      percentage: "0.29%",
    },
    {
      name: "SOL/USDT",
      name1: "Gate",
      image: Image8,
      img: Image1,
      name2: "Binance",
      date: "15.11.23 00:29",
      buyingPrice: "0.59",
      sellingPrice: "0.61",
      amount: "$1 500",
      profit: "+$9.07",
      percentage: "0.16%",
    },
    {
      name: "BNB/USDT",
      name1: "Bitfinex",
      image: Image3,
      img: Image4,
      name2: "Kraken",
      date: "15.11.23 00:28",
      buyingPrice: "23.66",
      sellingPrice: "23.89",
      amount: "$4 500",
      profit: "+$28.63",
      percentage: "0.29%",
    },
    {
      name: "ALGO/USDT",
      name1: "Kucoin",
      image: Image9,
      img: Image10,
      name2: "OKX",
      date: "15.11.23 00:26",
      buyingPrice: "0.2181",
      sellingPrice: "0.21847",
      amount: "$3 250",
      profit: "+$24.82",
      percentage: "0.18%",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items to display per page

  // Calculate the index of the first and last item to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the data array to display only the items for the current page
  const currentItems = TableData.slice(indexOfFirstItem, indexOfLastItem);

  // Event handler to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
            <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <Heading
                title="Arbitration deals"
                heading="Browse a curated list of real-time arbitrage deals, complete with detailed information about the involved cryptocurrencies and exchanges."
              />
            </div>
            {/* <!-- end title --> */}
          </div>
        </div>
      </div>
      {/* <!-- end head --> */}
      {/* Statics Start */}
      <Card />
      {/* Statics End */}

      {/* <!-- deals --> */}
      <div class="section">
        <div class="container">
          <div class="row">
            {/* <!-- deals table --> */}
            <div className="col-12">
            <MarketTable />
            </div>
            {/* <!-- End deals table --> */}

            {/* <!-- paginator --> */}
            <div class="col-12">
              <div class="paginator">
                <span class="paginator__pages">10 from 183</span>

                <ul class="paginator__list-mobile">
                  <li>
                    <div className="a">
                      <i class="ti ti-arrow-left"></i>
                      <span>Prev</span>
                    </div>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>
                  </li>
                  <li>
                    <div className="a">
                      <span>Next</span>
                      <i class="ti ti-arrow-right"></i>
                    </div>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={indexOfLastItem >= TableData.length}
                    >
                      Next
                    </button>
                  </li>
                </ul>

                <ul class="paginator__list">
                  <li>
                    <div className="a" onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}>
                      <i class="ti ti-arrow-left"></i>
                    </div>
                  </li>
                  {Array.from({
                    length: Math.ceil(TableData.length / itemsPerPage),
                  }).map((page, index) => (
                    <li>
                      <div
                        className="a"
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                      >
                        {index + 1}
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="a" onClick={() => handlePageChange(currentPage + 1)}
                      disabled={indexOfLastItem >= TableData.length}>
                      <i class="ti ti-arrow-right">
                      
                      </i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- end paginator --> */}
          </div>
        </div>
      </div>

      {/* <!--end deals --> */}

      {/* Question Start */}
      <Question />
      {/* Question End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default Reports;
