import './Home.css'
import Nav from "../components/Nav";
import Button from "../components/Button";
import Footer from "../components/Footer";
import HomeData from "../data/HomeData.json"
import HomeArticle from "../components/HomeArticle";

const Home = () => {

    return ( 
            <>
                <Nav/>
                <main>
                <section className="welcome-sec">
                    <h1>Welcome to Dreamatrix Design</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur esse nisi exercitationem iste, magni porro optio? Eaque odit ratione officia. Vitae quae provident temporibus ullam? Ex aut quod nihil commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem maxime incidunt ab placeat ipsum quod maiores, unde dolore aliquam.</p>
                    <Button/>
                </section>
                <section className="biggest-img-sec">
                </section>

                {HomeData.map((article, index) => {return <HomeArticle article={article} key={index} />})}
                </main>
                <Footer/>
            </>
     );
}

export default Home;