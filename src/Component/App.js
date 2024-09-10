import Nav from "./HeaderNav/Nav";
import Home from "./Home page/Home";
import AboutMe from "./AboutMe page/AboutMe"
import MyProject from "./Projects Page/MyProject";
import ContactMe from "./ContactMe";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

    const [lang, setLang] = React.useState("");

	return (
		<Router>
            <Nav lang={lang} setLang={setLang} />
			<Routes>
				<Route path="/" element={<Home lang={lang} setLang={setLang} />} />
				<Route path="/aboutme" element={<AboutMe lang={lang} setLang={setLang}/>} />
				<Route path="/myprojects" element={<MyProject lang={lang} setLang={setLang}/>} />
                <Route path="/contact" element={<ContactMe lang={lang} setLang={setLang}/>} />
				<Route path="*" element={"404 page not found"} />
			</Routes>
		</Router>
	);

}

export default App;