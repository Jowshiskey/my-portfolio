import SoftwareSkills from "./SoftwareSkills";


const AboutMe = ( { lang } ) => {

    const aboutText = {
        EN : "This summer, I took the challenge to learn web devleopping. From the client-side frontend presentation and web services to the server-side backend Application deployement, I strive to learn the Fullstack ability to deliver stable and functionnal web application and services.",
        FR : "Cet ete, je me suis lance le defi d'apprendre sur le devleoppement web. De la presentation pour les clients a la gestion des serveurs et application, mon but est d'etre en position de de servir et entretenir des sites webs et leurs infrastructures."
    }
    const aboutText2 = {
        EN : "I'm a web devleopper from Montreal. Passionate about creating and interacting with the wonders of internet. With the help of HTML. CSS. JavaScript. and React, I manage database and create helpful and responsive website for all kind of projects or ideas.",
        FR : "Je suis un devleoppeur web de Montréal, Pssionné par la création de contenue numérique. Avec l'aide de HTML. CSS. JavaScript. et React, j'aide les compagnies a convertir leur idée en projets web."
    }
	return (
		<div className="aboutDiv">
            <h2 className="text" style={{color:"white"}}>{lang==="EN"? aboutText.EN : aboutText.FR}</h2>
            <h2 className="text" style={{color:"white"}}>{lang==="EN"? aboutText2.EN : aboutText2.FR}</h2>
            <SoftwareSkills />
            
		</div>
	)
}

export default AboutMe;