import './project.css'
import BlackJack from './assets/blackjack.png'


export default function Project(){
    return <section id="projects" data-aos="fade-up-left" data-aos-duration="1000">
        <h1>Projects</h1>
        <div className="projs">
        <div className="proj1">
            <img src={BlackJack} alt="Blackjack"></img>
            <h3>Blackjack Game</h3>
            <a href="https://blackjack130424.netlify.app/" rel="noreferrer" target="_blank"><button>Live</button></a>
        </div>
        <div className="proj2">
        <img src={BlackJack} alt="Blackjack"></img>
            <h3>Blackjack Game</h3>
            <a href="https://blackjack130424.netlify.app/" rel="noreferrer" target="_blank"><button>Live</button></a>
        </div>
        <div className="proj3">
        <img src={BlackJack} alt="Blackjack"></img>
            <h3>Blackjack Game</h3>
            <a href="https://blackjack130424.netlify.app/" rel="noreferrer" target="_blank"><button>Live</button></a>
        </div>
        </div>
    </section>
}