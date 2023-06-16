import './Newsletter.css'

const Newsletter = () => {
    return ( 
        <section className='newsletter-sec'>
            <h1>Newsletter</h1>
        <form>
            {/* <p>If you want to recieve my Newsletter, please enter your E-Mail and subscribe. </p> */}
            <label htmlFor="email">If you want to recieve my Newsletter, please enter your E-Mail and subscribe.</label>
            <input type="email" id="email" />
            <input type="submit" value="Subscribe" />
        </form>
        </section>
     );
}
 
export default Newsletter;