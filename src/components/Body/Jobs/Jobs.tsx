import './Jobs.css';

export const Jobs = () => {
  return (
    <div className='jobs' id='jobs'>
        <div className="title">
            <h1><i className="fa-regular fa-industry"></i></h1>
            <h2>expériences</h2>
        </div>
        <div className="jobs-content">
            <ul>
                <li className="job">
                    <div className="job-title">
                        <h3>Dafy Moto</h3>
                    </div>
                    <div className="job-bottom">
                        <div className="text">
                            <div className="top-text">
                                <p><span>Description :</span> Développeur web</p>
                                <p><span>Date :</span> Mars 2022 <i className="fa-light fa-arrow-right-long"></i> Avril 2022</p>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="bottom-text">
                                <p><span><i className="fa-regular fa-location-dot"></i></span> Gap, France</p>
                            </div>
                            <div className="img">
                                <img src="./images/dafy.jpg" alt="Dafy moto" />
                            </div>
                        </div>
                    </div>
                </li>
                <li className="separator">
                    <i className="fa-duotone fa-ellipsis-stroke-vertical"></i>
                </li>
                <li className="job">
                    <div className="job-title">
                        <h3>NLJPC</h3>
                    </div>
                    <div className="job-bottom">
                        <div className="text">
                            <div className="top-text">
                                <p><span>Description :</span> Réparation et dépanage informatique</p>
                                <p><span>Date :</span> Mars 2020 <i className="fa-light fa-arrow-right-long"></i> Avril 2020</p>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="bottom-text">
                                <p><span><i className="fa-regular fa-location-dot"></i></span> Gap, France</p>
                            </div>
                            <div className="img">
                                <img src="./images/nljpc.jpg" alt="NLJPC" />
                            </div>
                        </div>
                    </div>
                </li>
                <li className="separator">
                    <i className="fa-duotone fa-ellipsis-stroke-vertical"></i>
                </li>
                <li className="job">
                    <div className="job-title">
                        <h3>Le Quattro</h3>
                    </div>
                    <div className="job-bottom">
                        <div className="text">
                            <div className="top-text">
                                <p><span>Description :</span> Installation d'équipements audiovisuel</p>
                                <p><span>Date :</span> 2019</p>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="bottom-text">
                                <p><span><i className="fa-regular fa-location-dot"></i></span> Gap, France</p>
                            </div>
                            <div className="img">
                                <img src="./images/quattro.png" alt="Le Quattro" />
                            </div>
                        </div>
                    </div>
                </li>
                <li className="separator">
                    <i className="fa-duotone fa-ellipsis-stroke-vertical"></i>
                </li>
                <li className="job">
                    <div className="job-title">
                        <h3>Hôpital Gap</h3>
                    </div>
                    <div className="job-bottom">
                        <div className="text">
                            <div className="top-text">
                                <p><span>Diplôme :</span> Dépannage matéirle informatique</p>
                                <p><span>Date :</span> 2018</p>
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="bottom-text">
                                <p><span><i className="fa-regular fa-location-dot"></i></span> Gap, France</p>
                            </div>
                            <div className="img">
                                <img src="./images/hopital.jpg" alt="Hôpital" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Jobs;