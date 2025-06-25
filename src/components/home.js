import './home.css'
import homeImage from './assets/home.png'
import Resume from './assets/Natesan.G_Resume.pdf'

export default function Home(){
    return <section id="home" className="fade-in">
        <img src={homeImage} alt="Home"></img>
        <div className="content">
            <h1>Hi! I am <span>G.Natesan</span></h1>
            <p>An aspiring <span>Front end developer</span></p>
            <a href={Resume} rel="noreferrer" target="_blank"><button>My Resume</button></a>
        </div>
    </section>
}