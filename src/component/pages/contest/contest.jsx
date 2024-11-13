import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import Footer from "../../common/footer";

const Contest = () => {
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
					<Heading title="Contest" heading="Take part in the drawing for a junior arbitrage node. Receive passive income from the price differences in cryptocurrency assets, even without active involvement." />
				</div>
				{/* <!-- end title --> */}
			</div>
		</div>
	</div>
	{/* <!-- end head --> */}

	{/* <!-- contest --> */}
	<div class="section">
		<div class="container">
			<div class="row row--relative">
				<div class="col-12 col-lg-7 col-xl-8">
					{/* <!-- invest --> */}
					<div class="invest invest--contest">
						<h2 class="invest__title">Arbitration Node Junior</h2>
						<p class="invest__text">Arbitrage nodes are specialized units equipped with cutting-edge algorithms that automatically scan multiple cryptocurrency exchanges, identifying price disparities in assets. Don't miss the chance to be part of a highly profitable arbitrage trading strategy. Win arbitrage node and start effectively managing your cryptocurrency portfolio today.</p>

						<div class="progressbar progressbar--contest">
							<h3 class="progressbar__title">Contestants:</h3>
							<div class="progress" role="progressbar" aria-label="Animated striped" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar progress-bar-striped progress-bar-animated w-75"><span>75</span></div></div>
							<div class="progressbar__values">
								<span class="progressbar__value progressbar__value--left">0</span>
								<span class="progressbar__value progressbar__value--right">100</span>
							</div>
						</div>

						{/* <!-- design elements --> */}
						<span class="block-icon block-icon--red">
							<i class="ti ti-mood-dollar"></i>
						</span>
						<span class="screw screw--lines-bl"></span>
						<span class="screw screw--lines-br"></span>
						<span class="screw screw--lines-tr"></span>
					</div>
					{/* <!-- end invest --> */}
				</div>

				<div class="col-12 col-lg-5 col-xl-4">
					{/* <!-- node --> */}
					<div class="node node--contest">
						<h3 class="node__title node__title--purple"><b>20</b> Centure</h3>
						<span class="node__date">30 days</span>
						<span class="node__price">Promotional: <b>Free</b></span>
						<span class="node__line"><img src="img/dodgers/dots--line-purple.svg" alt=""/></span>

						<ul class="node__list">
							<li><i class="ti ti-circle-check"></i><b>1.1%</b> of the deposit amount</li>
							<li><i class="ti ti-circle-check"></i><b>$10</b> to the principal balance</li>
							<li><i class="ti ti-circle-check"></i><b>$20</b> bonus balance</li>
							<li><i class="ti ti-circle-check"></i><b>+ 0.3%</b> daily profit</li>
						</ul>

						<button class="node__btn" data-bs-target="#modal-node" type="button" data-bs-toggle="modal">Take part</button>
						
						{/* <!-- design elements --> */}
						<span class="stats__dodger stats__dodger--left stats__dodger--purple"></span>
						<span class="stats__dodger stats__dodger--right stats__dodger--purple"></span>
						<span class="screw screw--br"></span>
						<span class="screw screw--bl"></span>
					</div>
					{/* <!-- end node --> */}
				</div>

				{/* <!-- animation background --> */}
				<div class="section__canvas section__canvas--page section__canvas--first gradient-background" id="canvas"></div>
			</div>
		</div>
	</div>
	{/* <!-- end contest --> */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    
	  {/* <!-- node modal --> */}
	<div class="modal modal--auto fade" id="modal-node" tabindex="-1" aria-labelledby="modal-node" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal__content">
					<button class="modal__close" type="button" data-bs-dismiss="modal" aria-label="Close"><i class="ti ti-x"></i></button>

					<h4 class="modal__title">Take part</h4>

					<p class="modal__text">Win arbitrage node and start effectively managing your cryptocurrency today.</p>

					<form action="#" class="modal__form">
						<div class="form__group">
							<input name="name" type="text" class="form__input" placeholder="Name"/>
						</div>

						<div class="form__group">
							<input name="mail" type="text" class="form__input" placeholder="Email"/>
						</div>

						<button class="form__btn" type="button">Send</button>
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

export default Contest;
