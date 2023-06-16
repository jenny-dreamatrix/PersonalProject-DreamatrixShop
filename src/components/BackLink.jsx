import { Link, useNavigate } from 'react-router-dom';
import './BackLink.css'

const BackLink = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

    return ( 
        <Link onClick={goBack} className='back-link'>&larr;</Link>
     );
}

export default BackLink;