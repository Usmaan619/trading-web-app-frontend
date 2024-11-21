import React, { useState } from "react";
import icic_logo from "../../asset/img/icici_logo.png";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

const PaginatedList = ({ data = [] }) => {
  const navigate = useNavigate();

  const itemsPerPage = 50; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="row">
      {currentItems?.map((item, index) => (
        <div
          role="button"
          key={index}
          className="col-6 col-lg-3 "
          onClick={() => {
            navigate(
              `/fund-details?data=${encodeURIComponent(JSON?.stringify(item))}`
            );
            console.log("item: ", encodeURIComponent(JSON?.stringify(item)));
          }}
        >
          <div className="funds-container p-3">
            <div className="d-flex align-items-center gap-2">
              <img src={icic_logo} height={40} width={30} alt="Loading" />
              <div className="d-grid mt-1 text-white fixed-width">
                <div className="font-sm text-truncate">{item?.schemeName}</div>
                <p className="font-xsm text-truncate">{item?.category}</p>
              </div>
            </div>
            <hr className="text-bg-white border" />
            <div className="d-flex align-items-center gap-2">
              <div className="d-grid mt-1 text-white fixed-width">
                <div className="font-sm text-truncate">Min. SIP amount</div>
                <p className="font-xsm text-truncate">₹{item?.nav}</p>
              </div>
              <div className="d-grid mt-1 text-white fixed-width text-center">
                <div className="font-sm text-truncate">Date</div>
                <p className="font-xsm text-truncate">{item?.date}</p>
              </div>
              <div className="d-grid mt-1 text-white fixed-width">
                <div className="font-sm text-truncate">Code</div>
                <p className="font-xsm text-truncate">{item?.schemeCode}%</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-primary"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(data.length / itemsPerPage) ? prev + 1 : prev
            )
          }
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
