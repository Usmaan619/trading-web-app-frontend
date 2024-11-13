import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import CompanyCard from "../../common/companyCard";
import Footer from "../../common/footer";

const Contact = () => {
  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}


      {/* <!-- head --> */}
	<div className="section section--head">
		<div className="container">
			<div className="row">
				{/* <!-- title --> */}
				<div className="col-12 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
				<Heading title="Get in touch" heading="Our support team is always on call, and ready to help with all your questions!" />
				</div>
				{/* <!-- end title --> */}
			</div>
		</div>
	</div>
	{/* <!-- end head --> */}

	{/* <!-- contact from --> */}
	<div className="section">
		<div className="container">
			<div className="row row--relative">
				<div className="col-12">
					<form className="form" action="#">
						<div className="row">
							<div className="col-12 col-md-6 col-xl-3">
								<div className="form__group">
									<label for="name" className="form__label">Name</label>
									<input id="name" type="text" name="name" className="form__input" placeholder="Full name"/>
								</div>
							</div>

							<div className="col-12 col-md-6 col-xl-3">
								<div className="form__group">
									<label for="mail" className="form__label">Email</label>
									<input id="mail" type="text" name="mail" className="form__input" placeholder="example@domain.com"/>
								</div>
							</div>

							<div className="col-12 col-md-6 col-xl-3">
								<div className="form__group">
									<label for="phone" className="form__label">Phone</label>
									<input id="phone" type="text" name="phone" className="form__input" placeholder="800 543 - 2109"/>
								</div>
							</div>

							<div className="col-12 col-md-6 col-xl-3">
								<div className="form__group">
									<label for="subject" className="form__label">Subject</label>
									<input id="subject" type="text" name="subject" className="form__input" placeholder="Ex. Support"/>
								</div>
							</div>

							<div className="col-12">
								<div className="form__group">
									<label for="message" className="form__label">Message</label>
									<textarea id="message" name="message" className="form__textarea" placeholder="Please enter your message..."></textarea>
								</div>
							</div>

							<div className="col-12">
								<button type="button" className="form__btn form__btn--small">Submit</button>
							</div>
						</div>

						{/* <!-- design elements --> */}
						<span className="block-icon block-icon--purple">
							<i className="ti ti-mail-up"></i>
						</span>
						<span className="screw screw--lines-bl"></span>
						<span className="screw screw--lines-br"></span>
						<span className="screw screw--lines-tr"></span>
					</form>
				</div>

				{/* <!-- animation background --> */}
				<div className="section__canvas section__canvas--page section__canvas--first gradient-background" id="canvas"></div>
			</div>
		</div>
	</div>
	{/* <!-- end contact from --> */}




      {/* Company Start */}
      <CompanyCard />
      {/* Company End */}


      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default Contact;
