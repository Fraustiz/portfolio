import './Portfolio.css';

export const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <div className="title">
            <h1><i className="fa-regular fa-folder"></i></h1>
            <h2>portfolio</h2>
        </div>
        <div className="portfolio-content">
            <div className="portfolio-card">
                <div className="portfolio-image">
                    <img src="./images/booki.png" alt="Page d'accueil Booki" />
                    <a href="https://booki.jules-drevon.fr" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <div className="portfolio-text">
                    <h3><a href="https://booki.jules-drevon.fr" target='_blank'>Booki</a></h3>
                    <p>Booki est un site de réservation d'hotel, réalisé en exercice pendant ma formation effectuée avec OpenClassrooms.</p>
                </div>
            </div>
            <div className="portfolio-card">
                <div className="portfolio-image">
                    <img src="./images/nina.png" alt="Page d'accueil Nina Carducci" />
                    <a href="https://nina-carducci.jules-drevon.fr" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <div className="portfolio-text">
                    <h3>Nina Carducci</h3>
                    <p>Nina Carducci est un site de photographe factice que j'ai du débugger et optimiser pendant un exercice de ma formation OpenClassrooms.</p>
                </div>
            </div>
            <div className="portfolio-card">
                <div className="portfolio-image">
                    <img src="./images/sophie.png" alt="Page d'accueil Sophie Bluel" />
                    <a href="https://sophie-bluel.jules-drevon.fr" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <div className="portfolio-text">
                    <h3>Sophie Bluel</h3>
                    <p>Sophie Bluel est un site d'une Designer d'espace, réalisé en partie durant un exercice pendant ma formation effectuée avec OpenClassrooms.</p>
                </div>
            </div>
            <div className="portfolio-card">
                <div className="portfolio-image">
                    <img src="./images/qr.png" alt="Page d'accueil Sophie Bluel" />
                    <a href="https://qr-code-component-fro.vercel.app" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <div className="portfolio-text">
                    <h3>QR Code Component</h3>
                    <p>QR Code Component est un site vitrine realisé pendant un simple exercice Frontend avec le site <a href="https://frontendmentor.io">Frontend Mentor</a>.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;