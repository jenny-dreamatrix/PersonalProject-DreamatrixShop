import './LoadingImage.css'
import { useContext, useEffect } from 'react';
import { LoadingContext } from "../context/Context";

const LoadingImage = () => {
    const {loading, setLoading} = useContext(LoadingContext)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },2000)
    },[])

    return ( 
        <section className="loading-wrapper">
        <div className="loading-img"></div>
        </section>
     );
}

export default LoadingImage;