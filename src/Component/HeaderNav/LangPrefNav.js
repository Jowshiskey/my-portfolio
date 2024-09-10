
const LangPrefNav = ( { setLang } ) => {

    return (
        <div>
            <div className="navLangDiv">
                    <button className="navLangBtn" onClick={(e=>{setLang("FR")})}><h1>~FR~</h1></button>
                    <button className="navLangBtn" onClick={(e=>{setLang("EN")})}><h1>~EN~</h1></button>
            </div>
        </div>
    )
    
}

export default LangPrefNav;


