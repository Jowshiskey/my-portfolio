const ECommerce = ( { lang } ) => {

    const eCommerceText = {
		FR : "Projet de Group : Projet de commerce en ligne " ,
		EN : "Group Project : Fullstack project of eCommerce plateform."
	}

    return (
        <div>
            <h2>ecommerce Project</h2>
            <h2 className="text" style={{color:"white"}}>{lang==="EN"? eCommerceText.EN : eCommerceText.FR}</h2>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", margin:"auto", maxWidth:"40vw"}}>
                <img src="./images\eCommerceSnap2.JPG" alt="" className="bootcampImg2"></img>
                <img src="./images\eCommerceSnap.JPG" alt="" className="bootcampImg"></img>
            </div>
        </div>
    )
}

export default ECommerce;
