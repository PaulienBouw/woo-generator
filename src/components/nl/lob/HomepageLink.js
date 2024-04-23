import React from "react";
import { Link } from "react-router-dom";

function HomepageLink({ wet, clickHandlerSetLaw }) {
	return (
		<div className="sectionLink">
			<div className="sectionBlock">
				<div>
					<h1>Wist je dat?</h1>
					<p>
						Jawel! Vanaf nu is er niet alleen de <b>Woo-generator</b> voor Nederland, maar ook een{" "}
						<b>WOB/BES-generator</b> voor Bonaire, St. Eustatius en Saba en een <b>LOB-generator</b> voor Curacao, Aruba
						en St. Maarten (CAS-eilanden).
					</p>
					<p>
						Wil je documenten opvragen bij een van de BES-eilanden, of in Nederland in plaats van bij een CAS-eiland?
						Kies dan waar je naartoe wilt hier.
					</p>
				</div>
				<div>
					<Link to="/NL/bes/" onClick={e => clickHandlerSetLaw("Wob BES")}>
						WOB BES
					</Link>
					<Link to="/NL/woo/" onClick={e => clickHandlerSetLaw("Woo")}>
						WOO
					</Link>
				</div>
			</div>
		</div>
	);
}
export default HomepageLink;
