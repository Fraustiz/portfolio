import { useEffect } from 'react';
import "./About.css";

export const About = () => {
    useEffect(() => {
        const contentImg = document.querySelector('.content-img') as HTMLElement;

        if (contentImg) {
            const randomBorderColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            contentImg.style.setProperty('--random-border-color', randomBorderColor);
        }
    }, []);

    return (
        <div className="about" id="about">
            <div className="infos">
                <div className="title">
                    <h1><i className="fa-regular fa-address-card"></i></h1>
                    <h2>À propos</h2>
                </div>
                <div className="content">
                    <div className="content-img">
                        <img src="./images/jules.png" alt="Moi" />
                    </div>
                    <div className="text-content">
                        <p className="paragraph">Jules Drevon, passionné de programmation depuis le collège et actuellement en première année à l'institut G4 de Lyon.<br/>Développeur Web Full Stack à la recherche d'une alternance, maîtrisant les langages HTML5, CSS3, PHP, JavaScript, TypeScript et SQL.</p>
                        <div className="info-profile-container">
                            <ul className="info-profile">
                                <li><span>Nom: </span> Jules DREVON--VINCENT</li>
                                <li><span>Date de naissance: </span> 24 août 2003</li>
                                <li><span>Ville: </span> Lyon (69009)</li>
                                <li><span>Téléphone: </span> <a href="tel:+33642270026">06 42 27 00 26</a></li>
                                <li><span>E-Mail: </span> <a href="mailto:jules.drevon@gmail.com">jules.drevon@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About