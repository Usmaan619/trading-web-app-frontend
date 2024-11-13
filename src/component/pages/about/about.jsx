import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import Card from "../../common/statistics/card";
import CompanyCard from "../../common/companyCard";
import RoadMap from "../../common/roadmap/roadmap";
import Footer from "../../common/footer";


const Company = () => {
    return(
        <>
    {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* <!-- head --> */}
	<div class="section section--head">
		<div class="container">
			<div class="row">
				{/* <!-- title --> */}
				<div class="col-12">
			<Heading title="About Centure"  heading="Centure is an affordable and successful crypto investment." />
				</div>
				{/* <!-- end title --> */}
			</div>
		</div>
	</div>
	{/* <!-- end head --> */}

	{/* <!-- about --> */}
	<div class="section section--pb">
		<div class="container">
			<div class="row row--relative">
				<div class="col-12">
					<div class="about">
						<h2 class="about__title">What is Centure?</h2>

						<p class="about__text">Centure is an advanced ecosystem of innovative financial products and services that provides clients with broad access to high-performance investment tools in the cryptocurrency market.</p>

						<p class="about__text">Centure has been developing a forward-thinking, reliable, intuitive investment platform since 2023, and offers everyone, regardless of their initial background, a first-hand experience of cryptocurrency investing in a safe, professional-led environment.</p>
						
						{/* <!-- design elements --> */}
						<span class="block-icon block-icon--purple">
							<i class="ti ti-binary"></i>
						</span>
						<span class="screw screw--lines-bl"></span>
						<span class="screw screw--lines-br"></span>
						<span class="screw screw--lines-tr"></span>
					</div>
				</div>

				{/* <!-- animation background --> */}
				<div class="section__canvas section__canvas--page section__canvas--first gradient-background" id="canvas"></div>
			</div>
		</div>
	</div>
	{/* <!-- end about --> */}

      {/* <!-- statistics --> */}
      <Card/>
      {/* <!--End statistics --> */}


      {/* start roadmap */}
      <RoadMap />
      {/* end roadmap */}


      {/* <!-- company --> */}
      <CompanyCard />
      {/* <!-- end company --> */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
        </>
    );
};
export default Company;