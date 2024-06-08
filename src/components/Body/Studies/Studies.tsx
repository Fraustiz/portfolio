import "./Studies.css";

export const Studies = () => {

    return (
        <div className="studies" id="studies">
            <div className="title">
                <h1><i className="fa-regular fa-school"></i></h1>
                <h2>études</h2>
            </div>
            <div className="studies-content">
                <ul>
                    <li className="study">
                        <div className="study-title">
                            <h3>Lycée Pierre Mendes France</h3>
                        </div>
                        <div className="study-bottom">
                            <div className="text">
                                <div className="top-text">
                                    <p><span>Diplôme :</span> Baccalauréat Système Numérique (Option RISC)</p>
                                    <p><span>Date :</span> Sept. 2018 <i className="fa-light fa-arrow-right-long"></i> Juin 2021</p>
                                </div>
                            </div>
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
                    <li className="separator">
                        <i className="fa-duotone fa-ellipsis-stroke-vertical"></i>
                    </li>
                    <li className="study">
                        <div className="study-title">
                            <h3>Formation OpenClassrooms</h3>
                        </div>
                        <div className="study-bottom">
                            <div className="text">
                                <div className="top-text">
                                    <p><span>Description :</span> Développeur web et web mobile</p>
                                    <p><span>Date :</span> Fev. 2023 <i className="fa-light fa-arrow-right-long"></i> Oct. 2023</p>
                                </div>
                            </div>
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
                    <li className="separator">
                        <i className="fa-duotone fa-ellipsis-stroke-vertical"></i>
                    </li>
                    <li className="study">
                        <div className="study-title">
                            <h3>Institut G4</h3>
                        </div>
                        <div className="study-bottom">
                            <div className="text">
                                <div className="top-text">
                                    <p><span>Diplôme :</span> RNCP niveau 6 Concepteur et développeur d'applications</p>
                                    <p><span>Date :</span> Sept. 2024</p>
                                </div>
                            </div>
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
        </div>
    )
}

export default Studies;