import './Loader.css';
import loader  from '../assets/icons/Plant.gif'

const Loader = () => {
    return (
      <div className="loader__container">
        <img src={loader} alt="Loading..."/>
      </div>
      );
}

export default Loader;