import { useEffect, useRef, useState } from 'react';
import "./Interest.css"

export const Interest = () => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            if (audio.paused) {
                audio.play();
                setIsPlaying(true);
            } else {
                audio.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleMouseLeave = () => {
        const audio = audioRef.current;
        if (audio && !audio.paused) {
            audio.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    useEffect(() => {
        const menacingElement = document.querySelector('.menacing') as HTMLElement;
        const mobileNoElement = document.getElementById('mobile-no') as HTMLElement;
        if (menacingElement) {
            if (window.innerWidth <= 1100) {
                menacingElement.style.display = isPlaying ? 'flex' : 'none';
                menacingElement.style.justifyContent = 'center';
                mobileNoElement.style.display = 'none';
            }
            if (window.innerWidth > 1100) {
                menacingElement.style.display = isPlaying ? 'flex' : 'none';
                menacingElement.style.justifyContent = 'space-between'
                mobileNoElement.style.display = isPlaying ? 'flex' : 'none';
            }
        }
    }, [isPlaying]);

    

    return (
        <div className="interest">
            <div className='menacing'>
                <img src="./images/menacing.png" alt="Menacing" />
                <img src="./images/menacing.png" alt="Menacing" id='mobile-no'/>
            </div>
            <div className="title">
                <h1><i className="fa-solid fa-dungeon"></i></h1>
                <h2>Centres d'intérêts</h2>
            </div>
            <div className="interest-content">
                <div className="interest-box">
                    <div className="interest-circle">
                        <img src="./images/games.jpg" alt="jeux" />
                        <i className="fa fa-gamepad" id="games"></i>
                    </div>
                    <p>Jeux Vidéos</p>
                </div>
                <div className="interest-box" id="sport">
                    <div className="interest-circle">
                        <img src="./images/sport.jpg" alt="sport" />
                        <i className="fa-solid fa-dumbbell"></i>
                    </div>
                    <p>Sport</p>
                </div>
                <div className="interest-box" id="music" onMouseLeave={handleMouseLeave}>
                    <div className="interest-circle">
                        <img src="./images/music.jpg" alt="musique" />
                        <div className="audio">
                            <div className="audio-button" onClick={togglePlay}>
                                <i className={isPlaying ? "fa-regular fa-pause" : "fa-regular fa-play"} id="audio-button"></i>
                            </div>
                            <audio ref={audioRef} id="myJojo">
                                <source src="audio/jojoref.mp3" type="audio/ogg" />
                            </audio>
                        </div>
                        <i className="fa fa-music"></i>
                    </div>
                    <p>Musique</p>
                </div>
                <div className="interest-box" id="informatique">
                    <div className="interest-circle">
                        <img src="./images/informatique.jpg" alt="informatique" />
                        <i className="fa-solid fa-desktop"></i>
                    </div>
                    <p>Informatique</p>
                </div>
            </div>
        </div>
    )
}

export default Interest;