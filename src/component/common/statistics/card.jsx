import React, { useEffect, useState } from "react";
import { GET_TOTAL_USER_COUNT_API } from "../../apis/api";

const Card = () => {
  // const { value, name, img } = link;

  const [userData, setUserData] = useState();

  useEffect(() => {
    getIndexes();
    return () => {
      // clean
    };
  }, []);

  const getIndexes = async () => {
    try {
      const res = await GET_TOTAL_USER_COUNT_API();
      console.log("res: ", res);
      setUserData(res);
    } catch (error) {
      console.log("error:GET_INDEXES_API ", error);
    }
  };
  const CardData = [
    {
      value: userData?.totalUsers,
      name: "Total Users",
      img: "stats__dodger--purple",
    },
    {
      value: userData?.totalInvestment,
      name: "Total Investment",
      img: "stats__dodger--orange",
    },
    {
      value: userData?.totalProfit,
      name: "Total Profit Granted",
      img: "stats__dodger--green",
    },
    {
      value: userData?.totalReleasedAmount,
      name: "Amount Release",
      img: "stats__dodger--red",
    },
  ];
  return (
    <>
      {/* <!-- statistics --> */}
      <div className="section">
        <div className="container">
          <div className="row">
            {CardData.map((link, index) => (
              <div className="col-12 col-sm-6 col-xl-3">
                {/* <!-- stats --> */}
                <div class="stats">
                  <span class="stats__value">{link.value}</span>
                  <p class="stats__name">{link.name}</p>

                  {/* <!-- design elements --> */}
                  <span
                    class={`stats__dodger stats__dodger--left  ${link.img}`}
                  ></span>
                  <span
                    class={`stats__dodger stats__dodger--right  ${link.img}`}
                  ></span>
                </div>
                {/* <!-- end stats --> */}
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
      {/* <!--End statistics --> */}
    </>
  );
};
export default Card;
