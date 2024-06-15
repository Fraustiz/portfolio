import '../Studies/Studies.css';

export const Jobs = () => {

  return (
    <div className='card' id='jobs'>
        <div className="title">
            <h1><i className="fa-regular fa-industry"></i></h1>
            <h2>expériences</h2>
        </div>
        <ul>
            <li>
                <div className="card-title">
                    <h3>Hôpital Gap</h3>
                </div>
                <div className="descr">
                    <p><span>Diplôme :</span> Dépannage matériel informatique</p>
                    <p><span>Date :</span> 2018</p>
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
            <li>
                <div className="card-title">
                    <h3>Le Quattro</h3>
                </div>
                <div className="descr">
                    <p><span>Description :</span> Installation d'équipements audiovisuel</p>
                    <p><span>Date :</span> 2019</p>
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
            <li>
                <div className="card-title">
                    <h3>NLJPC</h3>
                </div>
                <div className="descr">
                            <p><span>Description :</span> Réparation et dépanage informatique</p>
                            <p><span>Date :</span> Mars 2020 <i className="fa-light fa-arrow-right-long"></i> Avril 2020</p>
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
            <li>
                <div className="card-title">
                    <h3>Dafy Moto</h3>
                </div>
                <div className="descr">
                    <p><span>Description :</span> Développeur web</p>
                    <p><span>Date :</span> Mars 2022 <i className="fa-light fa-arrow-right-long"></i> Avril 2022</p>
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
        </ul>
    </div>
  )
}

export default Jobs;