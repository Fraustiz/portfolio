import "./Main.css"
import Typewriter from 'typewriter-effect/dist/core';
import { AuroraBackground } from "../../ui/aurora-background";
import { useEffect } from 'react';

export const Main = () => {
  useEffect(() => {
    const app = document.getElementById('iam');
    if (app) {
      const typewriter = new Typewriter(app, {
          loop: true,
          delay: 75,
          autoStart: true,
          deleteSpeed: 100,
      });
      app.insertAdjacentHTML('beforeend', `<span>Mon nom</span>`);

      const phrases = [
          { text: "Je suis", deleteCount: 7 },
          { text: "I'm", deleteCount: 3 },
          { text: "Ich bin", deleteCount: 7 },
          { text: "Estoy", deleteCount: 5 },
          { text: "Io sono", deleteCount: 7 },
          { text: "Eu sou", deleteCount: 6 },
          { text: "Я", deleteCount: 1 },
          { text: "Saya", deleteCount: 4 },
          { text: "Ben", deleteCount: 3 },
          { text: "Jeg er", deleteCount: 6 }
      ];

      typewriter.start();
      phrases.forEach(({ text, deleteCount }) => {
          typewriter.typeString(text)
              .pauseFor(1500)
              .deleteChars(deleteCount);
      });
    }
  }, []);

  return (
    <AuroraBackground>
        <div className="main-page" id="main-page">
            <h1>Bienvenue !</h1>
            <h3 id="iam"></h3>
            <p>Développeur Web Full Stack</p>
        </div>
    </AuroraBackground>
  )
}

export default Main;