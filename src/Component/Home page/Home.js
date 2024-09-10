import React from "react";

import OutLinkIcon from "./OutLinkIcon";
import Profile from "./Profile";
import LangPref from "./LangPref";

const Home = ( { lang, setLang }) => {
    
    const mainH3 = {
        EN : "Welcome to my web developer Profile, feel free to take a moment to explore my 2024 Porfolio." 
        ,FR : "Bienvenue sur mon Profile de devleoppeur web. Je vous invite a Prendre un moment pour Explorer mon Porfolio 2024."
    }

    if(lang!==""){
        return (
            <div className="homeDiv">
                <div className="homeMainDiv">                
                    <Profile />
                    <h3 className="text">{lang==="EN" ? mainH3.EN : mainH3.FR} </h3>
                    <OutLinkIcon lang={lang}/>
                </div>
            </div>
        )
        
    } else {
        return (
            <div className="homeDiv">
                <div className="homeMainDiv">
                    <LangPref setLang={setLang}/>
                </div>
            </div>
        )
    }
}

export default Home;