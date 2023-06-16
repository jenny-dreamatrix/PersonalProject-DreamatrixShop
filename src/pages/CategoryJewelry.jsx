import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BackLink from "../components/BackLink";

const CategoryJewelry = () => {
    return ( 
        <>
        <Nav/>
        <main>
        <BackLink/>
        <h1>Jewelry</h1>
        <section className="categories-sec">
            <article>
                <img src="../../public/home_02.jpg" alt="" />
                <div className='category-slider'>
                   <Link to='/shop/category/jewelry/necklaces' >Necklaces</Link>
                </div>
            </article>
            <article>
                <img src="../../public/home_02.jpg" alt="" />
                <div className='category-slider'>
                <Link to='/shop/category/jewelry' >Rings</Link>
                </div>
            </article>
            </section>
        </main>
        <Footer/>
        </>
     );
}
 
export default CategoryJewelry;