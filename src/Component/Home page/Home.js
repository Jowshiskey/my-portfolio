import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                {/* <h1 className="mainH1"> FullStack </h1> */}
                {/* {/* {lang==="EN" ? <h1 className="mainH1"> WEB devleoppement </h1> : <h1 className="mainH1"> devleoppement WEB </h1>}         */}
                {/* <h1 className="mainName">2024</h1> */}
                
                <Profile />
                <h3 className="text">{lang==="EN" ? mainH3.EN : mainH3.FR} </h3>
                <OutLinkIcon lang={lang}/>
                </div>
            </div>
        )
        
    } else {
        return (
            <div className="homeDiv">
                <LangPref setLang={setLang}/>
            </div>
        )
    }
}

export default Home;