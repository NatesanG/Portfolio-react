import './about.css'
import AboutImage from './assets/d11.png'

export default function About(){
    return <section id="about" data-aos="fade-right" data-aos-offset="300"
    data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <h1>About</h1>
        <div className="content1">
            <img src={AboutImage} alt="About"></img>
            <p>I'm Natesan, a passionate frontend developer skilled in HTML, CSS, JavaScript, ReactJs, Tailwind CSS. With hands-on internship experience and award-winning projects, I build user-friendly, responsive web applications. I'm proactive, flexible, and driven to innovate through technology, especially in IoT and web development. Let's build something great together!</p>
        </div>
        <div className="ed">
        <div className="education">
            <div className="scl">
                <h2>Fresher</h2>
                <h3>Frontend Developer</h3>
            </div>
            <div className="clg">
                <h2>Education</h2>
                <h3>B.E Electronics and Communication Engineering</h3>
                <p>K.L.N College of Engineering</p>
            </div>
        </div>
        </div>
    </section>
}