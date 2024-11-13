import React, { useEffect, useState } from "react";
import { GET_USER_ALL_API } from "../apis/api";

const UserTable = () => {
  const [tableData, SetTableData] = useState();

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      const res = await GET_USER_ALL_API();
      console.log("res: ", res);
      SetTableData(res);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="col-12">
      <div className="deals">
        <div className="deals__table-wrap overflow-auto">
          <table className="deals__table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Total Investment</th>
                <th>Portfolio</th>
                <th>Transactions</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((user, index) => (
                <tr key={index}>
                  <td>
                    <div className="deals__text alert-success">
                      {user.username}
                    </div>
                  </td>
                  <td>
                    <div className="deals__text">{user.email}</div>
                  </td>
                  <td>
                    <div className="deals__text">{user.role}</div>
                  </td>
                  <td>
                    <div className="deals__text">₹{user.totalInvestment}</div>
                  </td>
                  <td>
                    <div className="deals__text">
                      {user?.portfolio?.map((asset, i) => (
                        <div key={i}>
                          <p>Asset Name: {asset.assetName}</p>
                          <p>Type: {asset.assetType}</p>
                          <p>Invested: ₹{asset.amountInvested}</p>
                          <p>Quantity: {asset.quantity}</p>
                          <p>Current Price: ₹{asset.currentPrice}</p>
                          <p>Profit/Loss: ₹{asset.profitLoss}</p>
                          <p>
                            Purchase Date:{" "}
                            {new Date(asset.purchaseDate).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="deals__text">
                      {user?.transactions?.map((transaction, j) => (
                        <div key={j}>
                          <p>Type: {transaction.type}</p>
                          <p>Asset: {transaction.assetName}</p>
                          <p>Amount: ₹{transaction.amount}</p>
                          <p>
                            Date:{" "}
                            {new Date(transaction.date).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="deals__text">
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </div>
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

export default UserTable;
