
const LangPref = ( { setLang } ) => {

    return (
            <div className="frEnDiv">
                    <button className="frBtn" onClick={(e=>{setLang("FR")})} ><h1 className="frBtn">~FR~</h1></button>
                    <h2 className="separator">|</h2>
                    <button className="enBtn"  onClick={(e=>{setLang("EN")})}><h1 className="enBtn">~EN~</h1></button>
            </div>
    )
}

export default LangPref;


