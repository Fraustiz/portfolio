import "./Studies.css";

export const Studies = () => {

    return (
        <div className="card" id="studies">
            <div className="title">
                <h1><i className="fa-regular fa-school"></i></h1>
                <h2>études</h2>
            </div>
            <ul>
                <li>
                    <div className="card-title">
                        <h3>Lycée Pierre Mendes France</h3>
                    </div>
                    <div className="descr">
                        <p><span>Diplôme :</span> Baccalauréat Système Numérique (Option RISC)</p>
                        <p><span>Studies-title :</span> Sept. 2018 <i className="fa-light fa-arrow-right-long"></i> Juin 2021</p>
                        <div className="bottom-content">
                            <div className="bottom-text">
                                <p><span><i className="fa-regular fa-location-dot"></i></span> Veynes, France</p>
                            </div>
                            <div className="img">
                                <img src="./images/veynes.jpg" alt="Lycée Pierre Mendes France" />
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card-title">
                        <h3>Formation OpenClassrooms</h3>
                    </div>
                    <div className="descr">                                    
                        <p><span>Description :</span> Développeur web et web mobile</p>
                        <p><span>Studies-title :</span> Fev. 2023 <i className="fa-light fa-arrow-right-long"></i> Oct. 2023</p>
                        <div className="bottom-content">
                            <div className="bottom-text">
                                <p><span><i className="fa-regular fa-location-dot"></i></span> En ligne</p>
                            </div>
                            <div className="img">
                                <img src="./images/openclassrooms.png" alt="OpenClassrooms" />
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card-title">
                        <h3>Institut G4</h3>
                    </div>
                    <div className="descr">
                        <p><span>Diplôme :</span> RNCP niveau 6 Concepteur et développeur d'applications</p>
                        <p><span>Studies-title :</span> Sept. 2024</p>
                        <div className="bottom-content">
                            <div className="bottom-text">
                                <p><span><i className="fa-regular fa-location-dot"></i></span> Lyon, France</p>
                            </div>
                            <div className="img">
                                <img src="./images/g4.jpg" alt="Institut G4" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Studies;