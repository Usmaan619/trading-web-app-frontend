import React from "react";

// Image
import logo from "../../asset/img/logo.svg";
const Forgot = () => {
    return(
        <>
        	{/* <!-- page wrap --> */}
	<div className="section section--content">
		<div className="section__content">
			{/* <!-- form --> */}
			<form action="#" className="form form--content">
				<div className="form__logo-wrap">
					<a href="index.html" className="form__logo">
						<img src={logo} alt="Loading"/>
					</a>
					<span className="form__tagline">Arbitrage trading <br/>HTML Template</span>
				</div>

				<div className="form__group">
					<input type="text" className="form__input" placeholder="Email"/>
				</div>

				<div className="form__group form__group--checkbox">
					<input id="remember" name="remember" type="checkbox"/>
					<label for="remember">I agree to the <a href="privacy.html">Privacy Policy</a></label>
				</div>
				
				<button className="form__btn" type="button">Send</button>

				<span className="form__text form__text--center">We will send a password to your Email</span>

				{/* <!-- design elements --> */}
				<span className="block-icon block-icon--purple">
					<i className="ti ti-lock"></i>
				</span>
				<span className="screw screw--big-tr"></span>
				<span className="screw screw--big-bl"></span>
				<span className="screw screw--big-br"></span>
			</form>
			{/* <!-- end form --> */}
		</div>

		{/* <!-- animation background --> */}
		<div className="section__canvas section__canvas--full section__canvas--third gradient-background" id="canvas3"></div>
	</div>
	{/* <!-- end page wrap --> */}
        </>
    );
};
export default Forgot;