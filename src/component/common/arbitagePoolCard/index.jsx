import React from "react";

const PoolCard = () => {
  const PoolCardData = [
    {
      title: "Maximum",
      li1: "2 months",
      li2: "6 months",
      value: "$500 - $2500",
      profit: "Daily profit (%):",
      profit1: "0.35",
      value1: "$800 - $3000",
      profit2: "0.42",
      amount: "Enter amount",
      color: "block-icon--orange",
      tab: "apool__tabs--orange",
      tabButton1:"#atab-1",
      tabDes1:"atab-1",
      tabButton2:"#atab-2",
      tabDes2:"atab-2",
      
    },

    {
      title: "Standard",
      li1: "7 weeks",
      li2: "20 weeks",
      value: "$400 - $2000",
      profit: "Daily profit (%):",
      profit1: "0.31",
      value1: "$600 - $2500",
      profit2: "0.37",
      amount: "Enter amount",
      color: "block-icon--green",
      tab: "apool__tabs--green",
      tabButton1:"#atab-3",
      tabDes1:"atab-3",
      tabButton2:"#atab-4",
      tabDes2:"atab-4",
    },

    {
      title: "Lite",
      li1: "30 days",
      li2: "50 days",
      value: "$250 - $900",
      profit: "Daily profit (%):",
      profit1: "0.24",
      value1: "$350 - $1400",
      profit2: "0.29",
      amount: "Enter amount",
      color: "block-icon--blue",
      tab: "apool__tabs--blue",
      tabButton1:"#atab-5",
      tabDes1:"atab-5",
      tabButton2:"#atab-6",
      tabDes2:"atab-6",
    },
  ];

  return (
    <>
      <div className="row">
        {PoolCardData.map((link, index) => (
          <div className="col-12 col-md-6 col-lg-4">
            {/* <!-- arbitrage pool --> */}
            <div className="apool">
              <h3 className="apool__title">{link.title}</h3>

              {/* <!-- tabs nav --> */}
              <ul
                className={`"nav nav-tabs apool__tabs ${link.tab}`}
                id="apool__tabs1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target={link.tabButton1}
                    type="button"
                    role="tab"
                    aria-controls={link.tabDes1}
                    aria-selected="true"
                  >
                    {link.li1}
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target={link.tabButton2}
                    type="button"
                    role="tab"
                    aria-controls={link.tabDes2}
                    aria-selected="false"
                  >
                    {link.li2}
                  </button>
                </li>
              </ul>
              {/* <!-- tabs nav --> */}

              {/* <!-- tabs content --> */}
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id={link.tabDes1}
                  role="tabpanel"
                >
                  <div className="apool__content">
                    <span className="apool__value">{link.value}</span>
                    <span className="apool__profit">
                      {link.profit} <b>{link.profit1}</b>
                    </span>
                  </div>
                </div>

                <div className="tab-pane fade" id={link.tabDes2} role="tabpanel">
                  <div className="apool__content">
                    <span className="apool__value">{link.value1}</span>
                    <span className="apool__profit">
                      {link.profit} <b>{link.profit2}</b>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- end tabs content --> */}

              <div className="apool__group">
                <label for="pool1" className="apool__label">
                  {link.amount}
                </label>
                <input
                  id="pool1"
                  name="pool1"
                  type="text"
                  className="apool__input"
                />
              </div>

              <button
                className="apool__btn"
                data-bs-target="#modal-apool"
                type="button"
                data-bs-toggle="modal"
              >
            Invest
              </button>

              {/* <!-- design elements --> */}
              <span className={`block-icon ${link.color} `}>
                <i className="ti ti-database-dollar"></i>
              </span>
              <span className="screw screw--lines-tr"></span>
            </div>
            {/* <!-- end arbitrage pool --> */}
          </div>
        ))}
        ;
      </div>

      {/* <!-- arbitrage pool modal --> */}
	<div class="modal modal--auto fade" id="modal-apool" tabindex="-1" aria-labelledby="modal-apool" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal__content">
					<button class="modal__close" type="button" data-bs-dismiss="modal" aria-label="Close"><i class="ti ti-x"></i></button>

					<h4 class="modal__title">Invest</h4>

					<p class="modal__text">You can spend money from your account to renew connected packages or pay in other available ways.</p>

					<form action="#" class="modal__form">
						<div class="form__group">
							<label class="form__label">Сheck to:</label>
							<input name="mail" type="text" class="form__input" placeholder="Email"/>
						</div>

						<div class="form__group">
							<label class="form__label">Payment method:</label>

							<ul class="form__radio">
								<li>
									<input id="type1" type="radio" name="type" checked=""/>
									<label for="type1">My balance</label>
								</li>
								<li>
									<input id="type2" type="radio" name="type"/>
									<label for="type2">Visa / Mastercard</label>
								</li>
								<li>
									<input id="type3" type="radio" name="type"/>
									<label for="type3">Paypal</label>
								</li>
							</ul>
						</div>

						<button class="form__btn" type="button">Proceed</button>
					</form>

					{/* <!-- design elements --> */}
					<span class="screw screw--big-tl"></span>
					<span class="screw screw--big-bl"></span>
					<span class="screw screw--big-br"></span>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end arbitrage pool modal --> */}

    </>
  );
};
export default PoolCard;
