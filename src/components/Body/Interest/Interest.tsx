"use client";
import "./Interest.css"
import { Button } from "../../ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Les bordures sont cool
      </Button>
    </div>
  );
}

export const Interest = () => {
    return (
        <div className="interest">
            <div className="row">
                <div className="title">
                    <h1><i className="fa-solid fa-dungeon"></i></h1>
                    <h2>Centres d'intérêt</h2>
                </div>
            </div>
            <div className="interest-content">
                <div className="interest-box">
                    <div className="interest-circle bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                        <img src="/public/images/games.jpg" alt="Jeux" />
                        <i className="fa fa-gamepad" id="games"></i>
                    </div>
                    <p>Jeux Vidéos</p>
                </div>
                <div className="interest-box">
                    <div className="interest-circle bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                        <img src="/public/images/sport.jpg" alt="Sport" />
                        <i className="fa-solid fa-dumbbell"></i>
                    </div>
                    <p>Sport</p>
                </div>
                <div className="interest-box">
                    <div className="interest-circle bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                        <img src="/public/images/music.jpg" alt="Musique" />
                        <i className="fa fa-music"></i>
                    </div>
                    <p>Musique</p>
                </div>
                <div className="interest-box">
                    <div className="interest-circle bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                        <img src="/public/images/informatique.jpg" alt="Informatique" />
                        <i className="fa-solid fa-desktop"></i>
                    </div>
                    <p>Informatique</p>
                </div>
            </div>
        </div>
    )
}

export default Interest;