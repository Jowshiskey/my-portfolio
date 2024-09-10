//import component


//import route
import { NavLink } from "react-router-dom";
import LangPrefNav from "./LangPrefNav";

const Nav = ( { lang, setLang } ) => {


	return (
		<div className="navDiv">
            <header className="navHeader">
                <LangPrefNav setLang={setLang}/>
                <NavLink to="/"><p className="text">{lang==="FR" ? "Acceuil" : "Home" }</p> </NavLink>
                <NavLink to="/aboutme"> <p className="text">{lang==="FR" ? "A propos" : "About Me"}</p></NavLink>
                <NavLink to="/myprojects"><p className="text">{lang==="FR" ? "Mes Projets" : "My projects"}</p></NavLink>
                <NavLink to="/contact"> <p className="text">{lang==="FR" ? "Contacte" : "Contact Me"}</p></NavLink>
            </header>
        </div>
	)
}

export default Nav;