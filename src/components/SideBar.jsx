import {Link} from "react-router-dom"
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sibeBarLeft">
        <span className="logo">Logo</span>
        <h1 className="name">Cafeteria Maulini</h1>
      </div>
      <div className="sibeBarRight">
        <ul>
          <li className="option">
            <Link to="/">Home</Link>
          </li>
          <li className="option">
            <Link to="/products">Products</Link>
          </li>
          <li className="option">
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
