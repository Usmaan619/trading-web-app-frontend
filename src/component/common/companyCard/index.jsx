import React from "react";

const CompanyCard =()=>{
    
    return(
        <> 
      {/* <!-- company --> */}
	<section className="section">
		<div className="container">
			<div className="row row--relative">
				<div className="col-12">
					<div className="company">
						<h2 className="company__title">Company registration</h2>
						
						<div className="row">
							<div className="col-12 col-xl-7">
								<p className="company__text">Integrity, reliability, transparency, flexibility and communication should be the core values of any company that works in the field of investment attraction. Centure adheres to absolutely all of these values so that our clients can have confidence and trust in us.</p>
								<p className="company__text">License No. <b>8597366</b></p>
							</div>

							<div className="col-12 col-xl-4 offset-xl-1">
								<p className="company__subtitle">Legal address:</p>
								<p className="company__text">99 Chancery Street, <br/>Auckland Central, <br/>Auckland, 1010, New Zealand</p>
							</div>
						</div>

						{/* <!-- design elements --> */}
						<span className="block-icon block-icon--orange">
							<i className="ti ti-certificate-2"></i>
						</span>
						<span className="screw screw--lines-bl"></span>
						<span className="screw screw--lines-br"></span>
						<span className="screw screw--lines-tr"></span>
					</div>
				</div>

				{/* <!-- animation background --> */}
				<div className="section__canvas section__canvas--second gradient-background" id="canvas2"></div>
			</div>
		</div>
	</section>
	{/* <!-- end company --> */}
        </>
    );
};
export default CompanyCard;