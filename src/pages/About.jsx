import Footer from "../components/Footer";
import Nav from "../components/Nav";
import './About.css'

const About = () => {
    return ( 
        <>
        <Nav/>
        <main>
        <h1>About</h1>
        <section className="about-sec">
        <p>Hello everyone and welcome to the world of Dreamatrix. My name is Jenny and I am the face behind this project.</p>
        <p>Dreamatrix is the realization of a big dream that lived inside of me for many years. After studying design and times of traveling and searching for answers about life, the world and myself, I finally found my own way of expression using geometry in combination with natural, organic structures and imperfections.</p>
        <p>All of my creations are based on geometric symbols that I design as well. Through them I am creating my personal formal language that flows out of myself intuitively. Finally I am giving a deep intention into each symbol.</p>
        <p>If you want to learn more about my art, please check out my Instagram page.
        instagram.com/dreamatrix_design</p>
        <p>Thank you very much for supporting my dream project.</p>
        <p>Best wishes,
        Jenny</p>
        <figure>
            <img src="./about_01.jpg" alt="" />
            <img src="./about_02.jpg" alt="" />
            <img src="./about_01.jpg" alt="" />
            <img src="./about_02.jpg" alt="" />
        </figure>
        </section>
        </main>
        <Footer/>
        </>
     );
}
 
export default About;