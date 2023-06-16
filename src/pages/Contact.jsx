import Footer from "../components/Footer";
import Nav from "../components/Nav";
import './Contact.css'

const Contact = () => {
    return ( 
        <>
        <Nav/>
        <main className="contact">
        <h1>Contact</h1>
        <form>
        <p>If you want to get in touch with me, please leave a message here. I will get back to you as soon as possible.</p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <label htmlFor="message">Message</label>
            <input type="textarea" id="message" />
            <input type="submit" value="Send" />
        </form>
        </main>
        <Footer/>
        </>
     );
}
 
export default Contact;