import Footer from "../components/Footer";
import Nav from "../components/Nav";
import './Symbols.css'

const Symbols = () => {
    return ( 
        <>
        <Nav/>
        <main>
            <section className="symbols-sec">
            <div className="symbols-small"></div>
            <div className="symbols-small"></div>
            <div className="symbols-small"></div>
            <div className="symbols-small"></div>
            <div className="symbols-small"></div>
            <div className="symbols-small"></div>
            <div className="symbols-small"></div>
            <div className="symbols-small"></div>
            </section>
            <h1>Symbols</h1>
            <section className="test">
                <img src="" alt="" />
            </section>

        </main>
        <Footer/>
        </>
     );
}

export default Symbols;