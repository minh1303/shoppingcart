import styles from "./navbar.module.css";
import { NavLink , Link} from "react-router-dom";
import cart from "../../assets/trolley-cart.png";
import PropTypes from "prop-types";
const Navbar = ({ cartCounter }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}><Link to={"/"}>super fake store</Link></div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>

        <li>
          <img className={styles.img} src={cart} />
          <span className={styles.cartcounter}>{cartCounter}</span>
        </li>
      </ul>
    </div>
  );
};
Navbar.propTypes = {
  cartCounter: PropTypes.number,
};
export default Navbar;
