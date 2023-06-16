import ShopButton from "./ShopButton";
import './HomeArticle.css'

const HomeArticle = (props) => {
let id = props.article.id

    return ( 
        <article className={id % 2 == 0 ? "home-art" : "home-art reverse"}>
            <div className="img-wrapper"><img src={props.article.img} alt={props.article.alt} /></div>
            <figure>
                <div className="line"></div>
                <h2>{props.article.titel}</h2>
                <figcaption>- + - - + - - + - - + - - + - - + - - + - - + - - + - - + - - + - - + - </figcaption>
                <p>{props.article.inhalt}</p>
                <ShopButton/>
            </figure>
        </article>
     );
}
 
export default HomeArticle;