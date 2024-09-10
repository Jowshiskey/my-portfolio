import Imbd from "../Projects Page/Imbd";
import Bootcamp from "./Bootcamp";
import ECommerce from "./ECommerce";

const MyProject = ( { lang } ) => {

	return (
		<div className="myProjectDiv">
			<div>
				<Bootcamp lang={lang} />
			</div>
			<div>
				<ECommerce lang={lang} />
			</div>
			<div>
				<Imbd lang={lang} />
			</div>
		</div>
	)
}

export default MyProject;