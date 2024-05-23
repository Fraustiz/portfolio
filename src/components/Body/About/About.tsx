import "./About.css"

export const About = () => {
    return (
        <div className="about" id="about">
            <div className="infos">
                <div className="title">
                <h1><i className="fa-regular fa-address-card"></i></h1>
                <h2>À propos de moi</h2>
                </div>
                <p className="paragraph">Bonjour, je suis <strong>Jules Drevon,</strong> développeur Web Full Stack passionné de programmation depuis le collège je suis à la recherche d'une alternance et rentre en première année dans l'institut G4 de Lyon. Je sais coder en HTML5, CSS3, PHP, JavaScript, TypeScript et SQL.</p>
                <div className="info-profile-container">
                    <ul className="info-profile">
                        <li><span>Nom: </span> Jules DREVON--VINCENT</li>
                        <li><span>Date de naissance: </span> 24 Août 2003</li>
                        <li><span>Ville: </span> Lyon (69009)</li>
                        <li><span>Téléphone: </span> <a href="tel:+33642270026">06 42 27 00 26</a></li>
                        <li><span>E-Mail: </span> <a href="mailto:jules.drevon@gmail.com">jules.drevon@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About