import React from "react";

// Images
import img1 from "../../asset/img/dodgers/dots--line-orange.svg";
import img2 from "../../asset/img/dodgers/dots--line-green.svg";
import img3 from "../../asset/img/dodgers/dots--line-blue.svg";

const CentureCard = () => {
  const CentureCardData = [
    {
      title: "100",
      title1: "Centure",
      date: "30 days",
      price: "Partner course:",
      price1: "$59.64",
      img: img1,
      li1: "3%",
      li2: " of the deposit amount",
      li3: "$100",
      li4: "to the principal balance",
      li5: "$200",
      li6: "bonus balance",
      li7: "+ 0.5%",
      li8: "daily profit",
      color: "node__title--orange",
      icon: "stats__dodger--orange",
    },
    {
      title: "200",
      title1: "Centure",
      date: "40 days",
      price: "Partner course:",
      price1: "$59.64",
      img: img2,
      li1: "5%",
      li2: " of the deposit amount",
      li3: "$200",
      li4: "to the principal balance",
      li5: "$300",
      li6: "bonus balance",
      li7: "+ 0.9%",
      li8: "daily profit",
      color: "node__title--green",
      icon: "stats__dodger--green",
    },
    {
      title: "500",
      title1: "Centure",
      date: "60 days",
      price: "Partner course:",
      price1: "$59.64",
      img: img3,
      li1: "7%",
      li2: " of the deposit amount",
      li3: "$400",
      li4: "to the principal balance",
      li5: "$600",
      li6: "bonus balance",
      li7: "+ 1.8%",
      li8: "daily profit",
      color: "node__title--blue",
      icon: "stats__dodger--blue",
    },
  ];

  return (
    <>
      <div className="row">
        {CentureCardData.map((link, index) => (
          <div className="col-12 col-md-6 col-lg-4">
            {/* <!-- node --> */}
            <div className="node">
              <h3 className={`node__title  ${link.color}`}>
                <b>{link.title}</b> {link.title1}
              </h3>
              <span className="node__date">{link.date}</span>
              <span className="node__price">
                {link.price} <b>{link.price1}</b>
              </span>
              <span className="node__line">
                <img src={link.img} alt="Loading" />
              </span>

              <ul className="node__list">
                <li>
                  <i className="ti ti-circle-check"></i>
                  <b>{link.li1}</b> {link.li2}
                </li>
                <li>
                  <i className="ti ti-circle-check"></i>
                  <b>{link.li3}</b> {link.li4}
                </li>
                <li>
                  <i className="ti ti-circle-check"></i>
                  <b>{link.li5}</b> {link.li6}
                </li>
                <li>
                  <i className="ti ti-circle-check"></i>
                  <b>{link.li7}</b> {link.li8}
                </li>
              </ul>

              <button
                className="node__btn"
                data-bs-target="#modal-node"
                type="button"
                data-bs-toggle="modal"
              >
                Buy Nodes
              </button>

              {/* <!-- design elements --> */}
              <span
                className={`stats__dodger stats__dodger--left  ${link.icon}`}
              ></span>
              <span
                className={`stats__dodger stats__dodger--right  ${link.icon}`}
              ></span>
            </div>
            {/* <!-- end node --> */}
          </div>
        ))}
        ;
      </div>

      {/* <!-- node modal --> */}
	<div class="modal modal--auto fade" id="modal-node" tabindex="-1" aria-labelledby="modal-node" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal__content">
					<button class="modal__close" type="button" data-bs-dismiss="modal" aria-label="Close"><i class="ti ti-x"></i></button>

					<h4 class="modal__title">Choose your node</h4>

					<p class="modal__text">You can spend money from your account to renew connected packages or pay in other available ways.</p>

					<form action="#" class="modal__form">
						<div class="form__group">
							<label class="form__label">Arbitrage node:</label>
							<select name="select" class="form__select">
								<option value="0">100 Centure</option>
								<option value="1">200 Centure</option>
								<option value="2">500 Centure</option>
							</select>
						</div>

						<div class="form__group">
							<label class="form__label">Сheck to:</label>
							<input name="mail" type="text" class="form__input" placeholder="Email"/>
						</div>

						<div class="form__group">
							<label class="form__label">Payment method:</label>

							<ul class="form__radio">
								<li>
									<input id="type4" type="radio" name="type0" checked=""/>
									<label for="type4">My balance</label>
								</li>
								<li>
									<input id="type5" type="radio" name="type0"/>
									<label for="type5">Visa / Mastercard</label>
								</li>
								<li>
									<input id="type6" type="radio" name="type0"/>
									<label for="type6">Paypal</label>
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
	{/* <!-- end node modal --> */}

    </>
  );
};
export default CentureCard;
