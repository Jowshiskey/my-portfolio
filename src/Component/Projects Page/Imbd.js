const Imbd = ( { lang } ) => {

    const FXText = {
		EN : "Last couple years I've been working on multiple kid's tv show and movies as a FX artist, here in my Hometown, Montreal.",
		FR : "Au cours des dernieres annees, j'ai eu la chance de travaillier sur des series tele pour enfant ainsi que des films d'animation en tant que FX artist."
	}

    return (
        <div>
            <h2 className="text" style={{color:"white"}}>{lang==="EN"? FXText.EN : FXText.FR}</h2>
            <ul className="imbdUl">
                <li className="movie1"><img src="./images\TOTS.jpg" alt="" className="movieImg"></img></li>
                <li className="movie2"><img src="./images\PAWPATROL.jpg" alt="" className="movieImg"></img></li>
                <li className="movie3"><img src="./images\TIGERAPPRENTICE.jpg" alt="" className="movieImg"></img></li>
            </ul>
        </div>
    )
}

export default Imbd;


