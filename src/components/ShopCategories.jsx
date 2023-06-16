import './ShopCategories.css'
import ProductData from '../data/ProductData.json'
import { Link } from 'react-router-dom';

const ShopCategories = () => {

    return ( 
        <section className="categories-sec">
            <article>
                <img src="./public/home_02.jpg" alt="" />
                <div className='category-slider'>
                   <Link to='/shop/category/jewelry' >Jewelry</Link>
                </div>
            </article>
            <article>
                <img src="./public/home_02.jpg" alt="" />
                <div className='category-slider'>
                <Link to='/shop/category/decor' >Decor</Link>
                </div>
            </article>
            <article>
                <img src="./public/home_02.jpg" alt="" />
                <div className='category-slider'>
                <Link>Prints</Link>
                </div>
            </article>
            <article>
                <img src="./public/home_02.jpg" alt="" />
                <div className='category-slider'>
                <Link>Other</Link>
                </div>
            </article>
        </section>
     );
}
 
export default ShopCategories;