import "./Interest.css"

export const Interest = () => {
    return (
        <div className="interest">
            <div className="row">
                <div className="col-md-12">
                    <div className="title">
                        <h1><i className="fa-solid fa-dungeon"></i></h1>
                        <h2>Mes centres d'intérêts</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="interests-content">
                        <div className="row">
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="interest-item wow fadeInUp">
                                    <div className="interest-item-content">
                                        <i className="fa fa-gamepad"></i>
                                        <p>Jeux Vidéos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="interest-item wow fadeInDown">
                                    <div className="interest-item-content">
                                        <i className="fa-solid fa-dumbbell"></i>
                                        <p>Sport</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="interest-item wow fadeInUp">
                                    <div className="interest-item-content">
                                        <i className="fa fa-music"></i>
                                        <p>Musique</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6">
                                <div className="interest-item wow fadeInDown">
                                    <div className="interest-item-content">
                                        <i className="fa-solid fa-desktop"></i>
                                        <p>Informatique</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interest;