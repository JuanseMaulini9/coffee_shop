import {Link} from "react-router-dom"
import logo from '../assets/logo/logo-coffee.svg'

export default function NavBar() {
  
  return (
    <div >
      <div className="sibeBarLeft">
        <img src={logo} alt='logo de la pagina' />
        <h1 >Cafeteria Maulini</h1>
      </div>
      <div >
        <ul>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li >
            <Link to="/products">Products</Link>
          </li>
          <li >
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
