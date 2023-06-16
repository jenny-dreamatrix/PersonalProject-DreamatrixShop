const Newsletter = () => {
    return ( 
        <>
        <form>
            <label htmlFor="email">Subscribe Newsletter</label>
            <input type="email" id="email" placeholder="enter your email"/>
            <input type="submit" value="Subscribe" />
        </form>
        </>
     );
}
 
export default Newsletter;