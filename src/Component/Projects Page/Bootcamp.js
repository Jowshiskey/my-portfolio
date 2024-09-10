const Bootcamp = ( { lang } ) => {

    const bootcampText = {
		FR : "Lost cat of Montreal : Project Fullstack avec MongoDB et express. Création d'un site web qui aide les utilisateurs à générer des affiches pour retrouver leur animaux perdus. gratuitement, facilement et rapidement. " ,
		EN : "Lost cat of Montreal : Fullstack project with MongoDB and express. I build a website to help user generate Free Images Posters for their lost animal without software."
	}

    return (
        <div>
            <h2 className="text" style={{color:"white"}}>{lang==="EN"? bootcampText.EN : bootcampText.FR}</h2>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", margin:"auto", maxWidth:"40vw"}}>
                <img src="./images\lostcatsnap.JPG" alt="" className="bootcampImg"></img>
                <img src="./images\lostcatsnap2.JPG" alt="" className="bootcampImg2"></img>
            </div>
        </div>
    )
}

export default Bootcamp;
